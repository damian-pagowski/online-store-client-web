exports.config = {
    runner: 'local',
    specs: [
        './test/specs/*.test.js'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['vscode'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // Hooks

    before: function (capabilities, specs) {
        browser.setTimeout({ implicit: 10000 }); // Set an implicit wait of 10 seconds
    },

    beforeSuite: function (suite) {
        browser.url('/');
    },
}
