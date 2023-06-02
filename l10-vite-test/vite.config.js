import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        https: true,
        host: '0.0.0.0',
        port: '3000',
        hmr: {
            https: true,
            host: 'l10-vite-websocket.dvl.to',
            port: '3001'
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
