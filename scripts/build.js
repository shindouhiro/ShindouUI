import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
console.log(__dirname)
// const packageStr = `{
//     "name": "ShindouUI",
//     "version": "1.1.0",
//     "main": "shindou-ui.umd.js",
//     "module": "shindou-ui.es.js",
//     "author": "Hikaru",
//     "description": "",
//     "repository": {
//       "type": "git",
//       "url": ""
//     },
//     "keywords": ["vue3", "组件库", "tsx", "UI"],
//     "license": "ISC",
//     "bugs": {
//       "url": ""
//     }
//   }`

const buildLib = async () => {
  await build(
    {
      plugins: [vue(), vueJsx()],
      build: {
        rollupOptions: {

        },
        lib: {
          entry: path.resolve(__dirname, '../src/components/index.ts'),
          name: 'shindou-ui',
          fileName: 'shindou-ui',
          formats: ['es', 'umd']
        }
      }
    })
}

buildLib()
