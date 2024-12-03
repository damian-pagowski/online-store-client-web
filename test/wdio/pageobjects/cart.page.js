class CartPage {
    get cartItem() { return $('.cart-item'); }
    get unitPrice() { return $('.cart-item-unit-price'); }
    get cartItemName() { return $('.cart-item-description'); }
    get cartSubTotal() { return $('.cart-item-value'); }
    get cartTotal() { return $('#cart-total'); }
    get payButton() { return $('#pay-button'); }
    get removeButton() { return $('.cart-item-remove'); }
    get cartEmptyAlert() { return $('.alert-danger > h2'); }
}

module.exports = new CartPage();