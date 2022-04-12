import { defineConfig } from 'vite'
import lessToJS from 'less-vars-to-js'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import { resolve } from 'path'
import fs from 'fs'

const pathResolver = (path: string) => resolve(__dirname, path)
const themeVariables = lessToJS(
  fs.readFileSync(pathResolver('./config/variables.less'), 'utf8')
)

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => {
            if (name === 'col' || name === 'row') {
              return 'antd/lib/style/index.less'
            }
            return `antd/es/${name}/style/index.less`
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
})
