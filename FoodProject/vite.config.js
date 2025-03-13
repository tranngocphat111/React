import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: "/FoodProject/",  // ⚠️ Đảm bảo có dòng này
  plugins: [react()],
});
