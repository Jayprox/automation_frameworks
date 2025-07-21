import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import { invalidUser } from '../pages/users';
import { page } from '../pages/page';

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('should show error for incorrect email and password', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    HomePage.getSignupLoginButton().click();

    SignupPage.getLoginToYourAccount().should('be.visible');
    SignupPage.enterLoginEmail(invalidUser.email);
    SignupPage.enterLoginPassword(invalidUser.password);
    SignupPage.clickLoginButton();

    cy.contains(invalidUser.incorrectEmailPasswordMessage).should('be.visible');
  });
});