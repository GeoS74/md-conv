module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "airbnb-typescript/base"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: './tsconfig.json'
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
      'no-param-reassign': 'off',
      'class-methods-use-this': 'off',
      'no-restricted-syntax': 'off',
      'import/prefer-default-export': 'off',
    }
}
