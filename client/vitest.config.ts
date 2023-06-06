import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    origin: "http://127.0.0.1:5175/",
  },
  plugins: [vue()],
});
