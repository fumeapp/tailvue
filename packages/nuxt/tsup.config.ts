import { Options } from 'tsup'

const config: Options = {
  splitting: false,
  allowSyntheticDefaultImports: true,
  format: ['esm'],
  entryPoints: [
    'src/module.ts',
  ],
  target: 'node14',
  clean: true,
  dts: true,
}

export default config
