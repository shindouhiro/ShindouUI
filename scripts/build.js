import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
const outputDir = path.resolve(__dirname, '../dist')
console.log(__dirname)

const createPackgeJson = async () => {
  const packageStr = `{
    "name": "shindou-ui",
    "version": "0.0.5",
    "main": "shindou-ui.umd.cjs",
    "module": "shindou-ui.js",
    "author": "Hikaru",
    "description": "",
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": ""
    }
  }`
  await fs.writeFile(path.resolve(outputDir, 'package.json'), packageStr, 'utf-8')
}

const buildLib = async () => {
  await build(
    {
      plugins: [vue(), vueJsx()],
      build: {
        lib: {
          entry: path.resolve(__dirname, '../src/components/index.ts'),
          name: 'shindou-ui',
          fileName: 'shindou-ui',
          formats: ['es', 'umd'],
        },
        outDir: outputDir
      }
    })
  createPackgeJson()
}

buildLib()
