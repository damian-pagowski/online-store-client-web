class PaymentConfirmation {
  successIcon = element(by.id("check-circle"));
  messageResult = element(by.css(".jumbotron .h2"));
  messageAdditional = element(by.css(".jumbotron .h5"));
  backButton = element(by.id("button-back"));
}

module.exports = PaymentConfirmation;
