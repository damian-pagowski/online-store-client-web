class Cart {
  cartItem = element(by.css(".cart-item"));
  unitPrice = element(by.css(".cart-item-unit-price"));
  cartItemName = element(by.css(".cart-item-description"));
  cartSubTotal = element(by.css(".cart-item-value"));
  cartTotal = element(by.id("cart-total"))
  payButton = element(by.id("pay-button"))
  removeButton = element(by.css(".cart-item-remove"))
  cartEmptyAlert = element(by.css(".alert-danger > h2"))
}

module.exports = Cart;
