module.exports = {
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".vue",
                ],
            },
        },
    },
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
        "import/prefer-default-export": "off",
        "import/extensions": ["error", "always", { "js": "never", "jsx": "never", "vue": "never" }],
        "no-trailing-spaces": "error",
        "vue/html-indent": ["error", 4],
    },
};
