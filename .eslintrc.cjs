const globals = require("globals");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended', // For future TypeScript integration
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+ with new JSX transform
    '@typescript-eslint/no-explicit-any': 'off', // Allow any for now, can be tightened later
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Ensure Prettier runs as an ESLint rule
    'no-unused-vars': ['warn', { args: 'none' }], // Warn about unused variables
  },
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2020,
  },
};
