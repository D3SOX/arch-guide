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
                text: 'Post-Installation',
                link: '/post-installation/'
            },
            {
                text: 'Fixes & Tweaks',
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
                        { text: 'Live Setup', link: '/installation/live-setup' },
                        { text: 'Partitioning & Formatting', link: '/installation/partitioning-formatting' },
                        { text: 'Mount file systems', link: '/installation/mount-filesystems' },
                        { text: 'Base installation', link: '/installation/base-installation' },
                        { text: 'Install Bootloader', link: '/installation/install-bootloader' },
                        { text: 'Configure system', link: '/installation/configure-system' },
                        { text: 'Setup users', link: '/installation/setup-users' },
                        { text: 'Install Desktop', link: '/installation/install-desktop' },
                        { text: 'Useful packages', link: '/installation/useful-packages' },
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

        algolia: {
            appId: '0E44DZDX9K',
            apiKey: '05f13b57950ef1918e20d7bb444ba444',
            indexName: 'arch-d3sox'
        },
    },
});
