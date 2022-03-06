import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import rollupJson from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import multiInput from 'rollup-plugin-multi-input'

export default {
  input: 'src/**/*.ts',
  output: [
    {
      dir: 'dist/',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    rollupJson(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extensions: ['.css'],
    }),
    multiInput(),
  ],
}
