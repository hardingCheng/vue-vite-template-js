import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    extensions: [".js", ".json", ".vue", ".ts"],
    alias: {
      "@": resolve(__dirname, "src"),
      components: resolve(__dirname, "src/components"),
      views: resolve(__dirname, "src/views"),
      utils: resolve(__dirname, "src/utils")
    }
  },
  build: {
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ["console.log", "console.info"],
        drop_debugger: true
      }
    },
    assetsDir: "static/assets",
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  },
  server: {
    host: true, // 可以以IP访问
    port: 9000, // 端口
    open: true, // 自动打开游览器
    cors: true, // 允许跨域
    proxy: {
      // '/api': {
      // 	// 这里配置真实的后端环境地址
      // 	target: 'http://aiot',
      // 	changeOrigin: true,
      // 	rewrite: (path) => path.replace('/api/', '/'),
      // },
    }
  }
});
