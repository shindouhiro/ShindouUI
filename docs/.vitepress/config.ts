import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  title: 'ShindouUI',
  description: 'ShindouUI',
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: {
      '/guide/': [
        {
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
          ]
        }
      ],
      '/components/': [
        {
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Tree 树形组件', link: '/components/tree' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
})
