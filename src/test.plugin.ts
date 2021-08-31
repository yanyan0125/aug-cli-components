// vue3插件的使用方法
// 对外暴露一个Object，的install方法，或者是一个function
import { App } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const plugins = {
  install: (app: App) => {
    // 全局的事件
    app.config.globalProperties.$echo = () => {
      console.log('a plugin');
    }
    app.component('hello-world', HelloWorld);
    app.provide('test', { message: 'from plugin' });
  }
};

export default plugins;
