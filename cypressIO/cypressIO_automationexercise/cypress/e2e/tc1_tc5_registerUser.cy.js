import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import { user, existingUser } from '../pages/users';
import { page } from '../pages/page';

describe('Test Case 1: Register User & Test Case 5: Register User with existing email', () => {

  it('should register a new user successfully', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    HomePage.getSignupLoginButton().click();

    SignupPage.getNewUserSignup().should('be.visible');
    SignupPage.enterName(user.name);
    SignupPage.enterEmail(user.email);
    SignupPage.clickSignupButton();

    SignupPage.getEnterAccountInfo().should('be.visible');
    SignupPage.selectTitleMr();
    SignupPage.enterPassword(user.password);
    SignupPage.selectDOB(user.dob.day, user.dob.month, user.dob.year);
    SignupPage.checkNewsletter();
    SignupPage.checkOffers();
    SignupPage.fillAddress(user);
    SignupPage.clickCreateAccount();

    SignupPage.getAccountCreated().should('be.visible');
    SignupPage.clickContinue();

    HomePage.getLoggedInAs(user.name).should('be.visible');
    SignupPage.clickDeleteAccount();
    SignupPage.getAccountDeleted().should('be.visible');
    SignupPage.clickContinue();
  });

  it('should show error when registering with an existing email', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    HomePage.getSignupLoginButton().click();

    SignupPage.getNewUserSignup().should('be.visible');
    SignupPage.enterName(existingUser.name);
    SignupPage.enterEmail(existingUser.email);
    SignupPage.clickSignupButton();

    cy.contains(existingUser.existingEmailMessage).should('be.visible');
  });
});