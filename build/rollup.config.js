import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { name } from '../package.json';
const file = type => `dist/${name}.${type}.js`

// 输出ts声明文件
const overrides = {
  compilerOptions: { "declaration": true },
  exclude: ['node_modules']
};

export { name, file }

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(), // 将第三方库的代码，打包入最终的文件中
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' }),
  ],
  external: ['vue', 'lodash-es']
  // external: (id) => {
  //   return /^vue/.test(id);
  // }
}