import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { createMarkdownRenderer } from 'vitepress';
import config from '../docs/.vitepress/config.ts';

const root = path.resolve('docs');
const renderer = await createMarkdownRenderer(root);
const pages = new Map();
const errors = [];

async function collect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue;
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) await collect(file);
        else if (entry.name.endsWith('.md')) {
            const env = { path: file, relativePath: path.relative(root, file) };
            const html = renderer.render(await readFile(file, 'utf8'), env);
            pages.set(file, {
                ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])),
                links: [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map(match => match[1]),
                frontmatter: env.frontmatter,
            });
        }
    }
}

function configuredLinks(value) {
    if (!value || typeof value !== 'object') return [];
    return Object.entries(value).flatMap(([key, item]) =>
        (key === 'link' || key === 'src') && typeof item === 'string'
            ? [item]
            : configuredLinks(item));
}

async function checkLink(source, link) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(link)) return;
    const url = new URL(link.replaceAll('&amp;', '&'), 'https://docs.invalid/' + path.relative(root, source));
    const pathname = decodeURIComponent(url.pathname);
    const target = path.join(root, pathname);
    const candidates = [target, target.replace(/\.html$/, '.md'), target + '.md', path.join(target, 'index.md')];
    const page = candidates.find(candidate => pages.has(candidate));
    if (page) {
        const fragment = decodeURIComponent(url.hash.slice(1));
        if (fragment && !pages.get(page).ids.has(fragment)) {
            errors.push(`${path.relative(root, source)}: missing anchor ${link}`);
        }
        return;
    }
    try {
        await access(path.join(root, 'public', pathname));
    } catch {
        errors.push(`${path.relative(root, source)}: missing target ${link}`);
    }
}

await collect(root);
let count = 0;
for (const [file, page] of pages) {
    for (const link of [...page.links, ...configuredLinks(page.frontmatter)]) {
        await checkLink(file, link);
        count++;
    }
}
for (const link of configuredLinks(config.themeConfig)) {
    await checkLink(path.join(root, 'index.md'), link);
    count++;
}
if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
} else {
    console.log(`Rendered ${pages.size} Markdown pages; checked ${count} link references and internal anchors.`);
}
