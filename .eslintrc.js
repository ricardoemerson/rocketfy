module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jsx-a11y', 'import'
  ],
  rules: {
    'react/jsx-curly-spacing': [2, { 'when': 'always', 'allowMultiline': true }],
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'no-use-before-define': ['error', { 'variables': false }],
    'react/jsx-one-expression-per-line': 'off',
    'no-shadow': 'off',
    'react/jsx-filename-extension': [ 1, { 'extensions': ['.js', '.jsx'] } ],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
  },
};
