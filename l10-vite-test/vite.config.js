import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        https: false,
        host: '0.0.0.0',
        port: '8080',
        hmr: {
            host: 'l10-vite-hmr.dvl.to',
            clientPort: '443',
            protocol: 'wss',
            https: true,
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
