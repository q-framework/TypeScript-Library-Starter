import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';
const name = 'starter';

export default {
  input: 'src/index.ts',
  output: {
    file: isProduction ? `dist/umd/${name}.min.js` : `dist/umd/${name}.js`,
    format: 'umd',
    name: name,
    sourcemap: !isProduction
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          declaration: false,
          declarationMap: false
        }
      }
    }),
    isProduction && terser()
  ]
};
