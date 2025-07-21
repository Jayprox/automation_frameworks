class SignupPage {
  getNewUserSignup() {
    return cy.contains('New User Signup!');
  }

  enterName(name) {
    cy.get('input[data-qa="signup-name"]').type(name);
  }

  enterEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  clickSignupButton() {
    cy.get('button[data-qa="signup-button"]').click();
  }

  getEnterAccountInfo() {
    return cy.contains('Enter Account Information');
  }

  selectTitleMr() {
    cy.get('div#uniform-id_gender1').click(); // Assuming 'Mr' is the first option
  }

  selectTitleMrs() {
    cy.get('div#uniform-id_gender2').click(); // Assuming 'Mrs' is the first option
  }

  enterPassword(password) {
    cy.get('input[data-qa="password"]').type(password);
  }

  selectDOB(day, month, year) {
    cy.get('select[data-qa="days"]').select(day);
    cy.get('select[data-qa="months"]').select(month);
    cy.get('select[data-qa="years"]').select(year);
  }

  checkNewsletter() {
    cy.get('input#newsletter').check();
  }

  checkOffers() {
    cy.get('input#optin').check();
  }

  fillAddress(details) {
    cy.get('input[data-qa="first_name"]').type(details.firstName);
    cy.get('input[data-qa="last_name"]').type(details.lastName);
    cy.get('input[data-qa="company"]').type(details.company);
    cy.get('input[data-qa="address"]').type(details.address1);
    cy.get('input[data-qa="address2"]').type(details.address2);
    cy.get('select[data-qa="country"]').select(details.country);
    cy.get('input[data-qa="state"]').type(details.state);
    cy.get('input[data-qa="city"]').type(details.city);
    cy.get('input[data-qa="zipcode"]').type(details.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(details.mobile);
  }

  clickCreateAccount() {
    cy.get('button[data-qa="create-account"]').click();
  }

  getAccountCreated() {
    return cy.contains('Account Created!');
  }

  clickContinue() {
    cy.get('a[data-qa="continue-button"]').click();
  }

  clickDeleteAccount() {
    cy.contains('Delete Account').click();
  }

  getAccountDeleted() {
    return cy.contains('Account Deleted!');
  }

  getLoginToYourAccount() {
    return cy.contains('Login to your account');
  }

  enterLoginEmail(email) {
    cy.get('input[data-qa="login-email"]').type(email);
  }

  enterLoginPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password);
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
  }

  clickLogout() {
    cy.contains('Logout').click();
  }
}

export default new SignupPage();