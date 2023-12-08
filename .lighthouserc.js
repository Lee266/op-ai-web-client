// https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: ['http://localhost:3000'],
      numberOfRuns: 3, //　lighthouseの試行回数
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {},
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
