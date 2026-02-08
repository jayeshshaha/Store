import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'
import tailwindcss from '@tailwindcss/vite';
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), mkcert(), tailwindcss(), flowbiteReact()],
    server: {
        port: 3000,

    }
})