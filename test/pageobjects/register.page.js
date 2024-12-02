class RegisterPage {
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#password'); }
    get registerButton() { return $('#register-btn'); }
    get loginLink() { return $('#link-to-login'); }

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
}

module.exports = new RegisterPage();