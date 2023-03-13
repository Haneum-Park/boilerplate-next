module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'next',
    'plugin:@typescript-eslint/eslint-recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: ['off', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'no-underscore-dangle': 0,
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js', 'jest.config.js', 'jest.setup.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
