module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    JUnitTestRailReporter: 'readonly',
  },
  ignorePatterns: ['.cache/', 'dist/', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: ['field', 'constructor', 'method'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    camelcase: [
      'error',
      {
        allow: ['case_id', 'include_all', 'status_id', 'suite_id'],
      },
    ],
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.{j,t}s', 'src/setupTests.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: true,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'sort-vars': [
      'error',
      {
        ignoreCase: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
