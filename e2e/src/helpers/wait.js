const EC = browser.ExpectedConditions;

const WAIT_TIME = 10000;

function waitForElementToBeClickable(element) {
  browser.wait(
    EC.elementToBeClickable(element),
    WAIT_TIME,
    "Wait for element to be clickable"
  );
}
exports.waitForElementToBeClickable = waitForElementToBeClickable;
function waitForElementToBeVisible(element) {
  browser.wait(
    EC.visibilityOf(element),
    WAIT_TIME,
    "Wait for element to be visible"
  );
}
exports.waitForElementToBeVisible = waitForElementToBeVisible;
function waitForElementDisappear(element) {
  browser.wait(EC.not(EC.visibilityOf(element)));
}
exports.waitForElementDisappear = waitForElementDisappear;
function waitForProductListToLoad(productListPage) {
  browser.wait(presenceOfAll(productListPage.getProducts()), WAIT_TIME);
}
exports.waitForProductListToLoad = waitForProductListToLoad;
function waitForTextToBe(elementFinder, text) {
  let hasText = () => {
    return (
      elementFinder &&
      elementFinder.getAttribute("innerText").then(actualText => {
        return actualText.indexOf(text) > -1;
      })
    );
  };
  browser.wait(EC.and(EC.presenceOf(elementFinder), hasText));
}
exports.waitForTextToBe = waitForTextToBe;
function presenceOfAll(elementArrayFinder) {
  return () => elementArrayFinder.count(count => count > 0);
}
function currentUrl() {
  return browser.getCurrentUrl();
}
exports.currentUrl = currentUrl;
