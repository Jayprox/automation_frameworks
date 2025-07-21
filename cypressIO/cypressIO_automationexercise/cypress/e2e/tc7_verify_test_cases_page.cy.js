import HomePage from '../pages/HomePage';
import { navbar } from '../pages/navbar';
import { page } from '../pages/page';

describe('Test Case 7: Verify Test Cases Page', () => {
  it('should navigate to the Test Cases page successfully', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    cy.contains(navbar.testCases).click();

    // Verify user is navigated to the test cases page
    cy.url().should('include', '/test_cases');
    cy.contains(navbar.testCases).should('be.visible');
  });
});