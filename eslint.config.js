import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    languageOptions: {
      globals: {
        uni: "writable",
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"]
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...compat.extends("plugin:prettier/recommended"),
  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"]
  },
  skipFormatting,
  {
    ignores: ["config/*", ".husky", ".local", "public/*", ".vscode", "node_modules"]
  }
];
