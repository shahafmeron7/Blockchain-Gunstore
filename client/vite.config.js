import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from "vite-plugin-env-compatible";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());

  return{

    plugins: [react()],
    build: {
      outDir: "build",
      sourcemap: false,
      minify: true,
      cssMinify: true,
      reportCompressedSize: true,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[hash].js`,
          chunkFileNames: `assets/[hash].js`,
          assetFileNames: `assets/[hash].[ext]`,
        },
      },
      
    },
    server: {
      open: true,
    },
  }
})
