import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  [globalIgnores(["toUpperCase.ts"])],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    plugins: { js },
    extends: ["js/recommended"],

    languageOptions: { globals: globals.node },
    rules: {
      "no-console": "error",
    },
  },
  tseslint.configs.recommended,
]);
