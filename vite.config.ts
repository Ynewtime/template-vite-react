/// <reference types="vitest" />

import React from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import path from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import transformerDirective from '@unocss/transformer-directives'

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
      Unocss({
        presets: [presetUno(), presetIcons({ prefix: '' })],
        shortcuts: {
          'base-color': 'text-$color',
          'tint-bg': 'bg-$tint',
          'base-bg': 'bg-$bg',
          'tint-theme': 'font-sans base-color tint-bg',
          'base-theme': 'font-sans base-color base-bg',
          'h-stack': 'flex items-center justify-center',
          'v-stack': 'flex flex-col items-center justify-center',
        },
        theme: {
          fontFamily: {
            sans: [
              '"Inter var"',
              'Inter',
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
          },
        },
        transformers: [transformerDirective()],
      }),
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
