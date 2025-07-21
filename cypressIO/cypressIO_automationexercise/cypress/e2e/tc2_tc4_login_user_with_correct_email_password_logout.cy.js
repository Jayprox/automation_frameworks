import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import { registeredUser } from '../pages/users';
import { page } from '../pages/page';

describe('Test Case 2: Login User with correct email and password, Test Case 4: Logout User', () => {
  it('should login with correct email and password', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    HomePage.getSignupLoginButton().click();

    SignupPage.getLoginToYourAccount().should('be.visible');
    SignupPage.enterLoginEmail(registeredUser.email);
    SignupPage.enterLoginPassword(registeredUser.password);
    SignupPage.clickLoginButton();

    HomePage.getLoggedInAs(registeredUser.name).should('be.visible');
    SignupPage.clickLogout();
    SignupPage.getLoginToYourAccount().should('be.visible');
  });
});