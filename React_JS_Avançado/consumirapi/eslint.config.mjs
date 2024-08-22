import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";

export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: globals.browser } },
    {
        rules: {
            indent: "error",
        },
    },
    eslintPluginReact,
    eslintConfigPrettier,
    eslintPluginPrettier,
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
