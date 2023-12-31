import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@db': path.resolve(__dirname, './src/db'),
			'@cusTypes': path.resolve(__dirname, './src/types'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
	plugins: [react()],
});
