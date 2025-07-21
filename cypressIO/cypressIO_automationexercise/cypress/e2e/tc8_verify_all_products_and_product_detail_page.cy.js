import HomePage from '../pages/HomePage';
import { navbar } from '../pages/navbar';
import { product } from '../pages/products';
import { page } from '../pages/page';

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('should display all products and product details correctly', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    cy.contains(navbar.products).click();

    // Verify user is navigated to ALL PRODUCTS page
    cy.url().should('include', product.allProductsPageLocation);
    cy.contains(product.allProducts).should('be.visible');

    // Verify products list is visible
    cy.get(product.productsList).should('have.length.greaterThan', 0);

    // Click on 'View Product' of the first product
    cy.get(product.productsList).first().contains('View Product').click();

    // Verify user is on product detail page
    cy.url().should('include', product.productDetailsPageLocation);

    // Verify product details are visible
    cy.get(product.productInformationField).within(() => {
      cy.get('h2').should('be.visible');
      cy.contains(product.category).should('be.visible');
      cy.contains(product.price).should('be.visible');
      cy.contains(product.availability).should('be.visible');
      cy.contains(product.condition).should('be.visible');
      cy.contains(product.brand).should('be.visible');
    });
  });
});