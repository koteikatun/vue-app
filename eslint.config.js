import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off", // Отключаем требование длинных имен
      "vue/require-default-prop": "off", // Не требовать обязательные default props
    },
  },
];
