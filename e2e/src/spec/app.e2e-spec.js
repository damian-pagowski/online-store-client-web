const ProductList = require("../po/product-list.po");
const Navbar = require("../po/navbar.po");
const LoginPage = require("../po/login.po");
const RegisterPage = require("../po/register.po");
const EC = browser.ExpectedConditions;
const WAIT_TIME = 2000;

describe("Online store end-to-end tests", function() {
  const testData = {};

  let mainPage;
  let navbar;
  let loginPage;
  let registerPage;

  beforeAll(() => {
    testData.email = new Date().getTime() + "@test.com";
    testData.password = "test";
  });

  afterAll(() => {
    browser.restart();
  });

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    mainPage = new ProductList();
    navbar = new Navbar();
    loginPage = new LoginPage();
    registerPage = new RegisterPage();
    mainPage.go();
  });

  it("should register user with valid credentials", () => {
    waitForElementToBeVisible(mainPage.listContainer);
    navbar.clickLogin();
    waitForElementToBeVisible(loginPage.loginLogo);
    expect(currentUrl()).toEqual(`${mainPage.baseUrl}/login`);

    loginPage.clickRegister();
    waitForElementToBeVisible(registerPage.loginLink);
    expect(currentUrl()).toEqual(`${mainPage.baseUrl}/register`);

    registerPage.setEmail(testData.email);
    expect(registerPage.getEmail()).toEqual(testData.email);

    registerPage.setPassword(testData.password);
    expect(registerPage.getPassword()).toEqual(testData.password);

    registerPage.clickRegister();
    waitForElementToBeVisible(navbar.logoutLink);
    expect(currentUrl()).toEqual(mainPage.baseUrl + "/");
  });

  it("should log it using valid credentials", () => {
    waitForElementToBeVisible(mainPage.listContainer);
    navbar.clickLogin();
    waitForElementToBeVisible(loginPage.loginLogo);
    expect(currentUrl()).toEqual(`${mainPage.baseUrl}/login`);
    registerPage.setEmail(testData.email);
    expect(registerPage.getEmail()).toEqual(testData.email);
    registerPage.setPassword(testData.password);
    expect(registerPage.getPassword()).toEqual(testData.password);
    registerPage.clickRegister();
    waitForElementToBeVisible(navbar.logoutLink);
    expect(currentUrl()).toEqual(mainPage.baseUrl + "/");
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
