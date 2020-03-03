exports.config = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--window-size=1366,768"]
    }
  },

  directConnect: true,
  baseUrl: "https://damian-estore-client.herokuapp.com",
  framework: "jasmine",
  specs: ["e2e/src/spec/app.e2e-spec.js"]
};
