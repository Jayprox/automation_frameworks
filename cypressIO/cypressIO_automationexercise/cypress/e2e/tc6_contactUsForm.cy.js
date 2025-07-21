import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';
import { user } from '../pages/users';
import { navbar } from '../pages/navbar';
import { page } from '../pages/page';

describe('Test Case 6: Contact Us Form', () => {
  it('should submit the Contact Us form successfully', () => {
    HomePage.visit();
    cy.title().should('include', 'Automation Exercise');
    cy.contains(navbar.contactUs).click();

    ContactUsPage.getGetInTouch().should('be.visible');
    ContactUsPage.enterName(user.name);
    ContactUsPage.enterEmail(user.email);
    ContactUsPage.enterSubject(user.subject);
    ContactUsPage.enterMessage(user.message);

    ContactUsPage.clickSubmit();

    // Handle alert
    cy.on('window:alert', (str) => {
      expect(str).to.match(/Success/);
    });

    ContactUsPage.getSuccessMessage().should('be.visible');
    ContactUsPage.clickHome();

    // Verify home page loaded
    cy.title().should('include', page.pageTitle);
    cy.contains(navbar.signupLogin).should('be.visible');
  });

});