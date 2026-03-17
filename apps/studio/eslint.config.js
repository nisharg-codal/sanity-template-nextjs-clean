import config from '@repo/eslint-config/react';

export default [
  ...config,
  // Disable the dev deps errors for specific files/folders
  {
    name: 'x/import-x/disable-dev-deps',
    files: ['**/sanity.cli.ts'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];
