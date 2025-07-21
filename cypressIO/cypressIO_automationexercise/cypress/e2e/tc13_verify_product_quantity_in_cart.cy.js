import HomePage from '../pages/HomePage';
import { page } from '../pages/page';
import { product } from '../pages/products';

describe('Test Case 13: Verify Product quantity in Cart', () => {
  it('should add a product with quantity 4 to the cart and verify the quantity in cart', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);

    // Click 'View Product' for the first product on home page
    cy.get(product.productsList).first().contains('View Product').click();

    // Verify product detail is opened
    cy.url().should('include', product.productDetailsPageLocation);
    cy.get(product.productInformationField).should('be.visible');

    // Increase quantity to 4
    cy.get('input[name="quantity"]').clear().type('4');

    // Click 'Add to cart' button
    cy.contains(product.addToCart).click();

    // Click 'View Cart' button
    cy.contains(product.viewCart).click();

    // Verify that product is displayed in cart page with exact quantity
    cy.get('#cart_info table tbody tr').first().find('.cart_quantity button.disabled').should('contain', '4');
  });
});