class BasePage {
  url = "/";
  goTo = function() {
    browser.get(this.url);
  };

  isVisible(locator) {
    return protractor.ExpectedConditions.visibilityOf(locator);
  }

  isNotVisible(locator) {
    return protractor.ExpectedConditions.invisibilityOf(locator);
  }

  inDom(locator) {
    return protractor.ExpectedConditions.presenceOf(locator);
  }

  notInDom(locator) {
    return protractor.ExpectedConditions.stalenessOf(locator);
  }

  isClickable(locator) {
    return protractor.ExpectedConditions.elementToBeClickable(locator);
  }

  hasText(locator, text) {
    return protractor.ExpectedConditions.textToBePresentInElement(
      locator,
      text
    );
  }

  and(arrayOfFunctions) {
    return protractor.ExpectedConditions.and(arrayOfFunctions);
  }

  titleIs(title) {
    return protractor.ExpectedConditions.titleIs(title);
  }
}

module.exports = BasePage;
