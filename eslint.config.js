import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([".astro/", "dist/"]),
  ...typescriptEslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {},
  },
]);
