const { $ } = require('@wdio/globals')
// const Page = require('./page');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();

class LoginPage {
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-btn'); }
    get registerLink() { return $('#link-to-register'); }
    get loginLogo() { return $('#logo-login'); }


    async login (username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }


    setEmail(email) {
        this.emailInput.setValue(email);
    }

    setPassword(password) {
        this.passwordInput.setValue(password);
    }

    getEmail() {
        return this.emailInput.getValue();
    }

    getPassword() {
        return this.passwordInput.getValue();
    }

    open(){
        browser.url('/login');
    }
}

module.exports = new LoginPage();