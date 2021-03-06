/* eslint-env node */

import { builtinModules } from 'module'
import { join } from 'path'

import { chrome } from '../../electron-vendors.config.json'

const PACKAGE_ROOT = __dirname

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/'
    }
  },
  plugins: [],
  base: '',
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    terserOptions: {
      ecma: 2020,
      compress: {
        passes: 2
      },
      safari10: false
    },
    rollupOptions: {
      external: [...builtinModules.filter(m => m !== 'process' && m !== 'assert')]
    },
    emptyOutDir: true,
    brotliSize: false
  }
}

export default config
