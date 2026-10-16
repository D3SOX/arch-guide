# arch-guide

My installation instructions and guide for Arch Linux

> The repo's `master` branch contains the source files for the site. The static files are in the [`gh-pages` branch](https://github.com/D3SOX/arch-guide/tree/gh-pages)!

## Development

Install dependencies

```bash
bun install
```

Check Markdown rendering, internal links and anchors

```bash
bun run check-links
```

Check external URLs separately. Remote rate limits and bot protection can cause failures that need manual verification.

```bash
bun run check-external-links
```

Run development server

```bash
bun run dev
```

Build for production

```bash
bun run build
```

See VitePress's [documentation](https://vitepress.dev/).
