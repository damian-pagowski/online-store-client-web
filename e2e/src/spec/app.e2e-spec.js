const ContactList = require("../page_object/ContactList.po");

describe("Contact list demo app", function() {
  const contactList = new ContactList();

  describe("adding a new contact", () => {
    beforeAll(() => {
      contactList.go();
    });

    it("should press add contact button", () => {
      contactList.addContactBtn.click();
      expect(currentUrl()).toEqual(`${contactList.baseUrl}/#/add`);
    });

    it("should write a name", () => {
      contactList.setName("Damian");
      expect(contactList.getName()).toEqual("Damian");
    });

    it("should write an email", () => {
      contactList.setEmail("damian@damian.me");
      expect(contactList.getEmail()).toEqual("damian@damian.me");
    });

    it("should write a phone number", () => {
      contactList.setPhone("1234567890");
      expect(contactList.getPhone()).toEqual("1234567890");
    });

    it("should click the create button", () => {
      contactList.clickCreateButton();
      expect(currentUrl()).toEqual(`${contactList.baseUrl}/#/`);
    });
  });
});

function currentUrl() {
  return browser.getCurrentUrl();
}

