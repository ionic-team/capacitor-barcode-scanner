const ionic = require('@ionic/eslint-config/recommended');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.build/**',
      'types/**',
      'android/**',
      'ios/**',
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
    ],
  },
  ...ionic,
];
