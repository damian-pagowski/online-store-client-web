const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    fixturesFolder: 'test/cypress/fixtures',
    supportFile: false,
    screenshotsFolder: 'test/cypress/screenshots',
    videosFolder: 'test/cypress/videos',
    downloadsFolder: 'test/cypress/downloads',
    baseUrl: 'http://localhost:3000',
  },
});