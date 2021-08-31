
import { App } from 'vue';
import LText from './LText.vue';
// vue组件本身就是一个Object

LText.install = (app: App) => {
  app.component(LText.name, LText);
}
export default LText;

