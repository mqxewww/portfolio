import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import typescriptEslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [".astro/", "dist/"],
  },
  {
    extends: [...typescriptEslint.configs.recommended, ...eslintPluginAstro.configs.recommended],
  },
  eslintConfigPrettier,
);
