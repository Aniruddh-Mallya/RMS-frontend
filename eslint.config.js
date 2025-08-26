import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  // 1) First block: unchanged
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] 
  },

  // 2) Second block: unchanged
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: { globals: { ...globals.browser, ...globals.node } } 
  },

  // 3) Third block: updated to add React plugin, rules, and settings
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact
    },
    extends: ["js/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off" // 🔥 This disables the rule
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  // 4) Fourth block: unchanged
  tseslint.configs.recommended,

  // 5) Fifth block: unchanged
  pluginReact.configs.flat.recommended
]);
