import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';
const name = 'starter';
const format = 'umd';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',
  output: {
    file: `dist/${format}/${name}${isProduction ? '.min' : ''}.js`,
    format,
    name,
    sourcemap: !isProduction
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          declaration: !isProduction,
          declarationMap: !isProduction
        }
      }
    }),
    isProduction && terser()
  ]
};
