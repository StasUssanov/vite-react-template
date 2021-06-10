/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
/* eslint-enable import/no-extraneous-dependencies */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
});
