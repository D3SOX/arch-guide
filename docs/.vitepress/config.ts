import { defineConfig } from "vitepress";

export default defineConfig({
    lang: 'en-US',
    title: "Arch Linux Guide",
    description: 'My installation instructions and guide for Arch Linux',

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        ['script', { defer: '', 'data-domain': 'arch.d3sox.me', src: 'https://analytics.soundux.rocks/js/script.js' }]
    ],

    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        nav: [
            {
                text: 'Installation',
                link: '/installation/',
            },
            {
                text: 'Encryption',
                link: '/encryption/',
            },
            {
                text: 'Post-installation',
                link: '/post-installation/'
            },
            {
                text: 'Maintenance and recovery',
                link: '/tweaks/'
            },
            {
                text: 'Gaming',
                link: '/gaming/'
            },
        ],
        sidebar: {
            '/installation/': [
                {
                    text: 'Installation',
                    items: [
                        { text: 'Introduction', link: '/installation/' },
                        { text: 'Live setup', link: '/installation/live-setup' },
                        { text: 'Partitioning and formatting', link: '/installation/partitioning-formatting' },
                        { text: 'Mount file systems', link: '/installation/mount-filesystems' },
                        { text: 'Base installation', link: '/installation/base-installation' },
                        { text: 'Configure system', link: '/installation/configure-system' },
                        { text: 'Set up users', link: '/installation/setup-users' },
                        { text: 'Install a desktop', link: '/installation/install-desktop' },
                        { text: 'Drivers and useful packages', link: '/installation/useful-packages' },
                        { text: 'Install a bootloader', link: '/installation/install-bootloader' },
                        { text: 'Reboot', link: '/installation/reboot' },
                    ]
                }
            ],
        },

        editLink: {
            pattern: 'https://github.com/D3SOX/arch-guide/edit/master/docs/:path',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/D3SOX/arch-guide' },
        ],

        footer: {
            message: 'Made by D3SOX with ❤️',
        },

        search: {
            provider: 'local'
        },
    },
});
