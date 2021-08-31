import { App } from 'vue';
import LText from './components/LText';

const components = [
  LText
];

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
}

export {
  LText,
  install
}

// 默认的全局导入
export default {
  install
}