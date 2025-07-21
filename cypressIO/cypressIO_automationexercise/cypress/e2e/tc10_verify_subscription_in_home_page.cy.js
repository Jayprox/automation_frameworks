import HomePage from '../pages/HomePage';
import { page } from '../pages/page';
import { registeredUser } from '../pages/users';

describe('Test Case 10: Verify Subscription in home page', () => {
  it('should subscribe successfully from the home page footer', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);

    // Scroll down to footer
    cy.scrollTo('bottom');

    // Verify 'SUBSCRIPTION' text is visible
    cy.contains(page.subscription).should('be.visible');

    // Enter email address and click arrow button
    cy.get(page.subscribeEmailField).type(registeredUser.email);
    cy.get(page.subscribeButton).click();

    // Verify success message
    cy.contains(page.subscriptionSuccessMessage).should('be.visible');
  });
});