module.exports = {
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "arrow-parens": ["warn", "as-needed", { "requireForBlockBody": false }],
    },
};
