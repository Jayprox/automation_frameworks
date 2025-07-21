class HomePage {


    visit() {
        cy.visit('https://automationexercise.com');
    }

    getLogo() {
        return cy.get('.logo');
    }

    getSignupLoginButton() {
        return cy.get('.login');
    }

    getProductsSection() {
        return cy.get('.products');
    }

    getContactUsButton() {
        return cy.get('a[href="/contact_us"]');
    }

    getAboutUsButton() {
        return cy.get('a[href="/about_us"]');
    }

    getCartButton() {
        return cy.get('.cart');
    }

    getSignupLoginButton() {
        return cy.contains('Signup / Login');
    }

    getLoggedInAs(username) {
        return cy.contains(`Logged in as ${username}`);
    }
}

export default new HomePage();