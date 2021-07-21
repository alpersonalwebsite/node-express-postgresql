const prettierConfig = require('./.prettierrc.js')

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'prettier'
  ],
  plugins: ['prettier', 'jest', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-unresolved': 'error'
  }
}