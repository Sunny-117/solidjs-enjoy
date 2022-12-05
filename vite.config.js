import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        minify: false,// 打包之后不压缩
    },
});
