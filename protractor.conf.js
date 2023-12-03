
exports.config = {
    specs: ['./e2e-spec.ts'],
    capabilities: {
      browserName: 'chrome',
      'binary': 'E:\\chromedriver.exe'
    },

    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function () {},
    },
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json'),
      });
    },
  };
  