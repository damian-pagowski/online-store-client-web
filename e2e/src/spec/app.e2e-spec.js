const ProductList = require("../po/product-list.po");
const Navbar = require("../po/navbar.po");
const LoginPage = require("../po/login.po");
const RegisterPage = require("../po/register.po");
const EC = browser.ExpectedConditions;
const WAIT_TIME = 2000;

describe("Online store end-to-end testss", function() {
  const mainPage = new ProductList();
  const navbar = new Navbar();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const testData = {};

  beforeAll(() => {
    mainPage.go();
    testData.email = new Date().getTime() + "@test.com";
    testData.password = "test";
  });

  describe("User Registration", () => {
    beforeAll(() => {
      browser.ignoreSynchronization = true;
    });

    it("should click login link in navbar", () => {
      waitForElementToBeClickable(navbar.loginLink);
      navbar.clickLogin();
      waitForUrlToContain("/login")
      expect(currentUrl()).toEqual(`${mainPage.baseUrl}/login`);
    });

    it("should click register link", () => {
      // waitForElementToBeClickable(loginPage.registerLink);
      loginPage.clickRegister();
      waitForUrlToContain("/register")
      expect(currentUrl()).toEqual(`${mainPage.baseUrl}/register`);
    });

    it("should write an email", () => {
      registerPage.setEmail(testData.email);
      expect(registerPage.getEmail()).toEqual(testData.email);
    });

    it("should write a password", () => {
      registerPage.setPassword(testData.password);
      expect(registerPage.getPassword()).toEqual(testData.password);
    });

    it("should click the register button", () => {
      registerPage.clickRegister();
      expect(currentUrl()).toEqual(mainPage.baseUrl);
    });
  });
});

function waitForElementToBeClickable(element) {
  browser.wait(
    EC.elementToBeClickable(element),
    WAIT_TIME,
    "Wait for element to be clickable"
  );
}

function waitForElementToBeVisible(element) {
  browser.wait(
    EC.visibilityOf(element),
    WAIT_TIME,
    "Wait for element to be vivsible"
  );
}

function waitForUrlToContain(text) {
  browser.wait(
    EC.urlContains(text),
    WAIT_TIME,
    `Wait for url to contain: ${text}`
  );
}

function currentUrl() {
  return browser.getCurrentUrl();
}
