import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-redux-vite-app/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './src/main.jsx',
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file that we created earlier
    setupFiles: "./src/setupTests.js",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    reporters: ["html"],
  },
});
