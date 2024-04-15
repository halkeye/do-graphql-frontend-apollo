import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react-swc'
import codegen from 'vite-plugin-graphql-codegen';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/query': 'http://localhost:8080'
    },
  },
  plugins: [
    basicSsl(),
    codegen(),
    react()
  ],
})
