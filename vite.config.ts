/// <reference types="vitest" />

import React from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import * as path from 'path'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  const baseConfig: UserConfig = {
    build: {
      target: 'esnext',
    },
    css: {
      postcss: {
        plugins: [require('postcss-nested')],
      },
    },
    define: {
      BUILD_TIME: JSON.stringify(new Date().toLocaleString()),
    },
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      // https://jotai.org/docs/guides/vite
      React({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
      // https://github.com/unocss/unocss
      Unocss(),
    ],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
    },
  }
  return baseConfig
})
