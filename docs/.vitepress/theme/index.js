//import './styles/fonts.css';
//export * from './without-fonts';
//export { default as default } from './without-fonts';

import DefaultTheme from 'vitepress/theme';
import './custom.css';

import NotFound from './NotFound.vue';

import VPFeature from 'vitepress/dist/client/theme-default/components/VPFeature.vue'

export default {

  extends: DefaultTheme,
  Layout: NotFound,
  enhanceApp({ app }) {
    // 全局注册组件
    app.component('VPFeature', VPFeature)
  }

}