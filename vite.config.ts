import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
	build: {
		outDir: './build'
	},
	server: {
		open: false,
		strictPort: true,
		watch: {
			usePolling: true
		}
	},
	plugins: [
		react(),
		tsconfigPaths(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
			}
		}),
		eslintPlugin()
	]
});
