exports.config = {
    capabilities: {
      browserName: "chrome"
    },
    directConnect: true,
    baseUrl: "http://localhost:3000",
    framework: "jasmine",
    specs: ["./tests/e2e/specs/contact-list-test.js"],
  
    // tests/e2e/specs/contact-list-test.js
  };
  