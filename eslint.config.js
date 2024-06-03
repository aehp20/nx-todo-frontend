const { FlatCompat } = require('@eslint/eslintrc');
const nxEslintPlugin = require('@nx/eslint-plugin');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginSimpleImportSort = require('eslint-plugin-simple-import-sort');
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    plugins: {
      '@nx': nxEslintPlugin,
      react: eslintPluginReact,
      'simple-import-sort': eslintPluginSimpleImportSort,
      'jsx-a11y': eslintPluginJsxA11y,
    },
  },
  {
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...config.rules,
    },
  })),
  ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      ...config.rules,
    },
  })),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^@nx-todo-frontend/'],
            ['^[a-zA-Z]'],
            ['^@'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\.(?!/?$)', '^\\./?'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
  ...compat
    .config({ extends: ['plugin:jsx-a11y/recommended'] })
    .map((config) => ({
      ...config,
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      rules: {
        ...config.rules,
      },
    })),
];
