//import './styles/fonts.css';
//export * from './without-fonts';
//export { default as default } from './without-fonts';

import DefaultTheme from 'vitepress/theme';
import './custom.css';
//export default DefaultTheme;

import NotFound from './NotFound.vue'
export default {
  extends: DefaultTheme,
  Layout: NotFound
}