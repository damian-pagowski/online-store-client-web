class ContactList {
    addContactBtn = element(by.id("add-contact"));
    nameInput = element(by.id("contact-name"));
    emailInput = element(by.id("contact-email"));
    phoneInput = element(by.id("contact-tel"));
    createContactButton = element(by.css("button.create-button"));
    baseUrl = "https://testing-angular-applications.github.io";
    go = function() {
      browser.get(this.baseUrl);
    };
  
    setName = name => this.nameInput.sendKeys(name);
    setEmail = email => this.emailInput.sendKeys(email);
    setPhone = phone => this.phoneInput.sendKeys(phone);
  
    getName = () => this.nameInput.getAttribute("value");
    getEmail = () => this.emailInput.getAttribute("value");
    getPhone = () => this.phoneInput.getAttribute("value");
    clickCreateButton = () => this.createContactButton.click();
  }
  
  module.exports = ContactList;
  