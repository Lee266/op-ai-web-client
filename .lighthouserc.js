module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: ['http://localhost:3000'],
      numberOfRuns: 3, //　lighthouseの試行回数
    },
    assert: {
      // assert options here
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
