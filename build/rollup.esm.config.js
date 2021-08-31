import basciConfig, { name, file } from './rollup.config';

export default {
  ...basciConfig,
  output: {
    name,
    file: file('esm'),
    format: 'es'
  }
}