import * as path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Component from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Pages(),
    Component({
      dts: path.resolve(pathSrc, "typings/components.d.ts"),
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dirs: [path.resolve(pathSrc, "composables")],
      dts: path.resolve(pathSrc, "typings/components.d.ts"),
    }),
  ],
});
