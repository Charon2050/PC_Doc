import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "电子扫盲WIKI",
  description: "面向所有人的\n电子扫盲课",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '概念', link: '/concept/overview' },
      { text: '教程', link: '/tutorial/tutorial' }
    ],

    sidebar: {
      '/concept/': [{
        text: '概念',
        items: [
          { text: '概述', link: '/concept/overview' },
          { text: '电脑', link: '/concept/computer' },
          { text: '操作系统', link: '/concept/os' },
          { text: '文件', link: '/concept/file' }
        ]
      }],
      '/tutorial/': [{
        text: '教程',
        items: [
          { text: '安装并使用 Steam 平台', link: '/tutorial/steam' },
          { text: '使用电子邮箱', link: '/tutorial/email' },
          { text: '解压缩', link: '/tutorial/unzip' }
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Charon2050' }
    ],
    editLink: {
      pattern: 'https://github.com/Charon2050/PC_Doc/tree/main/docs/:path',
      text: '在 GitHub 编辑本页面'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },
  lang: 'zh_CN',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
