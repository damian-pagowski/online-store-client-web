class Checkout {
  emailInput = element(by.id("email"));
  cardNumberInput = element(by.id("cardNumber"));
  cardExpirationInput = element(by.id("cardExpiry"));
  cvcInput = element(by.id("cardCvc"));
  cardHolderInput = element(by.id("billingName"));
  submitButton = element(by.css(".SubmitButton"));
  paymentTotalAmount = element(by.id("ProductSummary-TotalAmount"));
}

module.exports = Checkout;
