import eslintConfigPrettier from "eslint-config-prettier";

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "airbnb",
        "prettier",
        "plugin:@tanstack/eslint-plugin-query/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "prettier"],
    rules: {
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/no-rest-destructuring": "warn",
        "@tanstack/query/stable-query-client": "error",
    },
};
