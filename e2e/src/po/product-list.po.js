const EC = browser.ExpectedConditions;
const WAIT_TIME = 5000;

class ProductList {
  carousel = element(by.id("carouselProductList"));
  listContainer = element(by.css(".product-list-grid"));
  baseUrl = "https://damian-estore-client.herokuapp.com";

  go = function() {
    browser.driver.get(this.baseUrl);
  };
  
  getProductWithId = id => element(by.id(`product-${id}`));

  getProducts = () => element.all(by.css(".product-list-item"));

  getFirstProduct = () => element(by.css(".product-list-item"));

  getFirstProductName = () => element(by.css(".product-name")).getText();
  getFirstProductPrice = () =>
    this.getFirstProduct()
      .element(by.css(".product-price"))
      .getText();

  isListCountN = n => () => element.all(by.css(".product-list-item")).count(count => count ? count == n: false);

  waitForResultsToHaveCount = n => {
    browser.wait(EC.and(this.isListCountN(n), true), 6000);
  };

  addFirstProductToCart = () =>
    this.getFirstProduct()
      .element(by.css(".add-button"))
      .click();
}

module.exports = ProductList;
