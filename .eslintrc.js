module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/**', '**/dist/**'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  },
}
