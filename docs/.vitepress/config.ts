import { defineConfig } from "vitepress";

export default defineConfig({
    lang: 'en-US',
    title: "Arch Linux Guide",
    description: 'My installation instructions and guide for Arch Linux',

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
            repo: 'D3SOX/arch-guide',
            dir: 'docs',
            branch: 'master',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/D3SOX/arch-guide' },
        ],

        footer: {
            message: 'Made by D3SOX with ❤️',
        },

        algolia: {
            appId: 'VSE2VGLZX4',
            apiKey: '53080ab135085dba76f54868a2536998',
            indexName: 'arch-guide'
          },      
    },
});
