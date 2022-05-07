module.exports = {
  presets: [
    ['@babel/preset-env', {
      bugfixes: true,
      modules: 'auto',
      shippedProposals: true,
    }],
  ],
  overrides: [{
    presets: [
      ['@babel/preset-typescript', { optimizeConstEnums: true, allowDeclareFields: true, allowNamespaces: true }]
    ],
    test: /\.tsx?$/
  }],
  comments: false,
  targets: { 'firefox': '100.0' },
  plugins: [
    // stage-1
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'hack', topicToken: '^^' }],
    // stage-2
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    '@babel/plugin-proposal-throw-expressions',

    'babel-plugin-macros',
  ]
};
