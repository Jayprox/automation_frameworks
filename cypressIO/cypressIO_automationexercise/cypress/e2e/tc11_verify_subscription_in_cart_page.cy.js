import HomePage from '../pages/HomePage';
import { registeredUser } from '../pages/users';
import { page } from '../pages/page';
import { navbar } from '../pages/navbar';

describe('Test Case 11: Verify Subscription in Cart page', () => {
  it('should subscribe successfully from the cart page footer', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);

    // Click 'Cart' button
    cy.contains(navbar.cart).click();

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