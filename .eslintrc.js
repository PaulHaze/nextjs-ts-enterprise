module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:cypress/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'cypress',
    'prettier',
    'import',
  ],
  globals: {
    React: 'readonly',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {},
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'warn',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx', '.js', '.ts'] },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.test.jsx',
          '**/*.test.js',
          '**/*.stories.*',
          '**/.storybook/**/*.*',
        ],
      },
    ],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
      },
    },
  ],
};
