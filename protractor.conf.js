exports.config = {
  capabilities: {
    browserName: "chrome"
  },
  directConnect: true,
  baseUrl: "http://localhost:3000",
  framework: "jasmine",
  specs: ["./e2e/src/spec/app.e2e-spec.js"]
};
