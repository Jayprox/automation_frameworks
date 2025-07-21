import HomePage from '../pages/HomePage';
import { navbar } from '../pages/navbar';
import { product } from '../pages/products';
import { page } from '../pages/page';

describe('Test Case 9: Search Product', () => {
  it('should search for a product and display relevant results', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    cy.contains(navbar.products).click();

    // Verify user is navigated to ALL PRODUCTS page
    cy.url().should('include', product.allProductsPageLocation);
    cy.contains(product.allProducts).should('be.visible');

    // Enter product name in search input and click search button
    cy.get(product.searchProductField).type(product.searchTerm);
    cy.get(product.submitSearchButton).click();

    // Verify 'SEARCHED PRODUCTS' is visible
    cy.contains(product.searchedProducts).should('be.visible');

    // Verify all the products related to search are visible
    cy.get(product.productsList).should('have.length.greaterThan', 0);
    cy.get(product.productsList).each(($el) => {
      cy.wrap($el).should('be.visible');
    });
  });
});