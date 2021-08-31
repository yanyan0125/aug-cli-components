import basciConfig, { name, file } from './rollup.config';

export default {
  ...basciConfig,
  output: {
    name: 'augComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}