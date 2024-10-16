import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "电子扫盲 WIKI",
  description: "面向所有人的\n电子扫盲课",

  head: [['link', { rel: 'icon', href: '/pic/icon.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '科普', link: '/concept/overview' },
      { text: '指南', link: '/tutorial/overview' }
    ],

    sidebar: [
      {
        text: '科普',
        items: [
          { text: '概述', link: '/concept/overview' },
          { text: '电脑', link: '/concept/computer' },
          { text: '操作系统', link: '/concept/os' },
          { text: '浏览器', link: '/concept/browser' },
          { text: '文件', link: '/concept/file' },
          { text: '404', link: '/concept/404' },
          { text: 'BIOS', link: '/concept/bios' },
          { text: '分辨率和帧率', link: '/concept/resolution_and_frame_rate' },
          { text: 'DNS', link: '/concept/dns' },
        ]
      },
      {
        text: '指南',
        items: [
          { text: '安装并使用 Steam 平台', link: '/tutorial/steam' },
          { text: '使用电子邮箱', link: '/tutorial/email' },
          { text: '压缩与解压缩', link: '/tutorial/unzip' },
          { text: '访问网页', link: '/tutorial/visit_web' },
          { text: '编辑电子扫盲 WIKI', link: '/tutorial/edit' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Charon2050' }
    ],

    editLink: {
      pattern: 'https://github.com/Charon2050/PC_Doc/tree/main/docs/:path',
      text: '编辑'
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
    }}}}}}},

    outline: {
      label: '目录',
      level: [2,3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lightModeSwitchTitle:"浅色模式",
    darkModeSwitchTitle:"深色模式"
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
    },
  }
})