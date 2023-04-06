import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";

export default defineConfig({
  server: {
		https: true,
	},
	plugins: [
		mkcert(),
		react(),
	],
});
