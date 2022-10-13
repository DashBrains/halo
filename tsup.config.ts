import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*[!stories].tsx', 'src/**/*[!stories].ts'],
  splitting: true,
  clean: true,
  dts: true,
  minify: true,
  external: ['src/**/**.stories.tsx'],
})
