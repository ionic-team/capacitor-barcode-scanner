const eslintjs = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tseslintparser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'types/**', 'android/**', 'ios/**', 'eslint.config.*'],
  },
  eslintjs.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tseslintparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        HTMLStyleElement: 'readonly',
        atob: 'readonly',
        btoa: 'readonly',
        Blob: 'readonly',
        FileReader: 'readonly',
        capacitorExports: 'readonly',
        html5Qrcode: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      'no-redeclare': 'off',
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
  prettierConfig,
];

