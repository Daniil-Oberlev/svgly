module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((\w[\w-]*)\): (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'swag'],
    ],
    'subject-case': [2, 'always', 'lower-case'], // Тема в нижнем регистре
    'subject-max-length': [2, 'always', 70],
    'scope-enum': [
      2,
      'always',
      [
        'components',
        'ui',
        'styles',
        'layout',
        'state',
        'api',
        'auth',
        'pages',
        'config',
        'types',
        'tests',
        'docs',
        'ci',
        'release',
        'utils',
        'hooks',
        'i18n',
        'themes',
        'a11y',
        'security',
        'other',
      ],
    ],
    'scope-case': [2, 'always', 'lower-case'],
  },
  formatter: '@commitlint/format',
}
