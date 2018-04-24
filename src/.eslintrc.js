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
        "import/named": "error",
        "import/prefer-default-export": "off",
        "import/extensions": ["error", "never", { "css": "always", "scss": "always", "jpg": "always" }],
        "no-trailing-spaces": "error",
        "vue/html-indent": ["error", 4],
        "vue/v-bind-style": ["error", "longform"],
    },
};
