import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: true,
  treeshake: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  platform: 'node',
  target: ['es2017', 'node18'],
  tsconfig: new URL('./tsconfig.build.json', import.meta.url).pathname,
  inject: ['./src/react-import.ts'],
  publicDir: './public',
  sourcemap: !options.watch,
  minify: !options.watch,
}))
