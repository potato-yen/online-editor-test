// frontend/tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // 啟用 class 模式的 dark mode，方便未來切換
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        // 設定預設字體堆疊
        sans: ['Inter', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        // --- 語意化顏色系統 (Semantic Colors) ---
        
        // 1. 品牌色 (Brand) - 目前沿用 Sky 藍色系
        brand: {
          DEFAULT: '#0ea5e9', // sky-500
          hover: '#38bdf8',   // sky-400
          active: '#0284c7',  // sky-600
          muted: 'rgba(14, 165, 233, 0.1)', // sky-500/10
        },

        // 2. 背景層級 (Surface) - 基於 Neutral 色系
        surface: {
          base: '#0a0a0a',    // neutral-950: 應用程式最底層背景
          layer: '#171717',   // neutral-900: 側邊欄、卡片背景
          panel: '#262626',   // neutral-800: 浮動面板、Dropdown
          elevated: '#404040',// neutral-700: Modal、高亮區塊
        },

        // 3. 內容文字 (Content)
        content: {
          primary: '#f5f5f5',   // neutral-100: 主要標題、正文
          secondary: '#a3a3a3', // neutral-400: 次要資訊、說明文字
          muted: '#525252',     // neutral-600: 停用狀態、浮水印
          inverse: '#0a0a0a',   // 反白文字
        },

        // 4. 邊框與分隔線 (Border)
        border: {
          base: '#262626',      // neutral-800: 一般邊框
          subtle: '#171717',    // neutral-900: 輕微去背
          highlight: '#404040', // neutral-700: Hover 時的邊框
        },

        // 5. 狀態色 (Status)
        status: {
          error: '#ef4444',   // red-500
          success: '#22c55e', // green-500
          warning: '#eab308', // yellow-500
          info: '#3b82f6',    // blue-500
        }
      },
      // 擴充 Typography (Prose) 插件的預設樣式
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.content.primary'),
            // 讓 prose 內部的連結預設使用品牌色
            a: {
              color: theme('colors.brand.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand.hover'),
              },
            },
            // 讓 inline code 背景色與我們設計系統一致
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: theme('colors.surface.panel'),
              color: theme('colors.content.primary'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};