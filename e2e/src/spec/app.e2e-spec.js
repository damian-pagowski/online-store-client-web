const ProductList = require("../po/product-list.po");
const Navbar = require("../po/navbar.po");
const LoginPage = require("../po/login.po");
const RegisterPage = require("../po/register.po");
const Cart = require("../po/cart.po");
const CheckoutPage = require("../po/checkout.po");
const PaymentConfirmationPage = require("../po/payment-confirmation.po");
const {
  waitForElementToBeVisible,
  waitForElementDisappear,
  waitForTextToBe,
  waitForProductListToLoad,
  waitForElementToBeClickable,
  currentUrl,
} = require("../helpers/wait");

describe("Online store end-to-end tests", function() {
  const testData = {};
  let mainPage;
  let navbar;
  let loginPage;
  let registerPage;
  let cart;
  let checkoutPage;

  beforeAll(() => {
    timestampNow = new Date().getTime();
    testData.username = "" + timestampNow;
    testData.email = "" + timestampNow + "@test.com";
    testData.password = "test";
  });

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    browser.ignoreSynchronization = true;

    mainPage = new ProductList();
    navbar = new Navbar();
    loginPage = new LoginPage();
    registerPage = new RegisterPage();
    cart = new Cart();
    checkoutPage = new CheckoutPage();
    confirmationPage = new PaymentConfirmationPage();
    mainPage.go();
  });

  it("should register new user", () => {
    waitForElementToBeVisible(mainPage.listContainer);
    navbar.clickLogin();
    waitForElementToBeVisible(loginPage.loginLogo);
    expect(currentUrl()).toEqual(
      `${mainPage.baseUrl}/login`,
      "Login page should be loaded"
    );

    loginPage.clickRegister();
    waitForElementToBeVisible(registerPage.loginLink);
    expect(currentUrl()).toEqual(
      `${mainPage.baseUrl}/register`,
      "Registration page should be loaded"
    );

    registerPage.setEmail(testData.email);
    expect(registerPage.getEmail()).toEqual(
      testData.email,
      "Email should be set"
    );

    registerPage.setPassword(testData.password);
    expect(registerPage.getPassword()).toEqual(
      testData.password,
      "Password should be set"
    );

    registerPage.clickRegister();
    waitForElementToBeVisible(navbar.loggedUserName);
    expect(navbar.getLoggedUserName()).toEqual(
      testData.username,
      "Logged user name should be displayed in navbar"
    );
  });

  it("should complete check out process", () => {
    waitForElementToBeVisible(navbar.loggedUserName);
    waitForElementToBeVisible(mainPage.listContainer);
    waitForProductListToLoad(mainPage);
    mainPage.addFirstProductToCart();
    navbar.clickCart();
    waitForElementToBeVisible(cart.cartItemName);
    expect(cart.cartItemName.getText()).toEqual("Snake 3D");
    expect(cart.unitPrice.getText()).toEqual("Unit Price EUR 99.99");
    expect(cart.cartSubTotal.getText()).toEqual("Subtotal EUR 99.99");
    waitForTextToBe(cart.cartTotal, "EUR 99.99");
    waitForElementToBeClickable(cart.payButton);
    cart.payButton.click();

    waitForElementToBeClickable(checkoutPage.emailInput);
    checkoutPage.emailInput.sendKeys(testData.email);
    checkoutPage.cardNumberInput.sendKeys("4242424242424242");
    checkoutPage.cardExpirationInput.sendKeys("1230");
    checkoutPage.cvcInput.sendKeys("123");
    checkoutPage.cvcInput.sendKeys("123");
    checkoutPage.cardHolderInput.sendKeys("Mr Protractor");
    waitForElementToBeClickable(checkoutPage.submitButton);
    checkoutPage.submitButton.click();
    waitForElementToBeVisible(confirmationPage.successIcon);
    waitForElementToBeVisible(confirmationPage.messageResult);
    waitForElementToBeVisible(confirmationPage.messageAdditional);
    expect(confirmationPage.messageResult.getText()).toEqual(
      "Purchase was successful"
    );
    expect(confirmationPage.messageAdditional.getText()).toEqual(
      "Your item will be sent to you within 48 hours."
    );
    waitForElementToBeClickable(confirmationPage.backButton);
    confirmationPage.backButton.click();

    waitForElementToBeVisible(mainPage.listContainer);

    expect(currentUrl()).toEqual(
      `${mainPage.baseUrl}/`,
      "Main page should be loaded"
    );
  });
});
