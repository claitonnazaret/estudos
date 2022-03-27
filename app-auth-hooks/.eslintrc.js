module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'no-nested-ternary': 'off',
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'arrow-body-style': 'warn',
  },
};
