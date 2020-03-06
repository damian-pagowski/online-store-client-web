const ProductList = require("../po/product-list.po");
const Navbar = require("../po/navbar.po");
const LoginPage = require("../po/login.po");
const RegisterPage = require("../po/register.po");
const ProductCategories = require("../po/product-categories.po");
const EC = browser.ExpectedConditions;
const WAIT_TIME = 2000;

describe("Online store end-to-end tests", function() {
  const testData = {};

  let mainPage;
  let navbar;
  let loginPage;
  let registerPage;
  let categories;

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
    categories = new ProductCategories();
    mainPage.go();
  });

  // it("should register user with valid credentials", () => {
  //   waitForElementToBeVisible(mainPage.listContainer);
  //   navbar.clickLogin();
  //   waitForElementToBeVisible(loginPage.loginLogo);
  //   expect(currentUrl()).toEqual(`${mainPage.baseUrl}/login`);

  //   loginPage.clickRegister();
  //   waitForElementToBeVisible(registerPage.loginLink);
  //   expect(currentUrl()).toEqual(`${mainPage.baseUrl}/register`);

  //   registerPage.setEmail(testData.email);
  //   expect(registerPage.getEmail()).toEqual(testData.email);

  //   registerPage.setPassword(testData.password);
  //   expect(registerPage.getPassword()).toEqual(testData.password);

  //   registerPage.clickRegister();
  //   waitForElementToBeVisible(navbar.logoutLink);
  //   expect(currentUrl()).toEqual(mainPage.baseUrl + "/");
  // });

  // it("should log it using valid credentials", () => {
  //   waitForElementToBeVisible(mainPage.listContainer);
  //   navbar.clickLogin();
  //   waitForElementToBeVisible(loginPage.loginLogo);
  //   expect(currentUrl()).toEqual(`${mainPage.baseUrl}/login`);
  //   registerPage.setEmail(testData.email);
  //   expect(registerPage.getEmail()).toEqual(testData.email);
  //   registerPage.setPassword(testData.password);
  //   expect(registerPage.getPassword()).toEqual(testData.password);
  //   registerPage.clickRegister();
  //   waitForElementToBeVisible(navbar.logoutLink);
  //   expect(currentUrl()).toEqual(mainPage.baseUrl + "/");
  // });

  it("Searching products by three criteria", () => {
    waitForElementToBeVisible(mainPage.listContainer);
    waitForElementToBeClickable(categories.computers);
    categories.computers.click();
    waitForElementToBeClickable(categories.laptops);
    categories.laptops.click();
    waitForProductListToLoad(mainPage)
    mainPage.products.count( count => expect(count).toEqual(2));


    // .getText(text => expect(text).toBe('Som Tam Air'))
    expect(element(by.css('.product-name')).getText()).toEqual('Y-Book Premium Pro');


    // expect(currentUrl()).toEqual(`${mainPage.baseUrl}/login`);
    // registerPage.setEmail(testData.email);
    // expect(registerPage.getEmail()).toEqual(testData.email);
    // registerPage.setPassword(testData.password);
    // expect(registerPage.getPassword()).toEqual(testData.password);
    // registerPage.clickRegister();
    // waitForElementToBeVisible(navbar.logoutLink);
    // expect(currentUrl()).toEqual(mainPage.baseUrl + "/");
  });

  // * Searching products by three criteria
  //  * Adding products to the cart
  //  * Removing products from the cart
  //  * Checkout process
  //  * If possible, implement a sign-up / registration test
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
    "Wait for element to be visible"
  );
}

function waitForUrlToContain(text) {
  browser.wait(
    EC.urlContains(text),
    WAIT_TIME,
    `Wait for url to contain: ${text}`
  );
}

function waitForProductListToLoad(productListPage){
  browser.wait(presenceOfAll(productListPage.products, WAIT_TIME));
}

function presenceOfAll(elementArrayFinder) {
  return function () {
      return elementArrayFinder.count(function (count) {
          return count > 0;
      });
  };
}



function currentUrl() {
  return browser.getCurrentUrl();
}
