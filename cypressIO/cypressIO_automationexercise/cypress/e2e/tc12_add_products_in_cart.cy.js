import HomePage from '../pages/HomePage';
import { page } from '../pages/page';
import { navbar } from '../pages/navbar';
import { product } from '../pages/products';
import { cart } from '../pages/cart';

describe('Test Case 12: Add Products in Cart', () => {
  it('should add two products to the cart and verify their details', () => {
    HomePage.visit();
    cy.title().should('include', page.pageTitle);
    cy.contains(navbar.products).click();

    // Hover over first product and click 'Add to cart'
    cy.get(product.productsList).eq(0).trigger('mouseover');
    cy.get(product.productsList).eq(0).contains('Add to cart').click();

    // Click 'Continue Shopping'
    cy.contains(product.continueShopping).click();

    // Hover over second product and click 'Add to cart'
    cy.get(product.productsList).eq(1).trigger('mouseover');
    cy.get(product.productsList).eq(1).contains('Add to cart').click();

    // Click 'View Cart'
    cy.contains(page.viewCart).click();

    // Verify both products are added to Cart
    cy.get('.cart_info tbody tr').should('have.length', 2);

    // Verify their prices, quantity and total price
    cy.get('.cart_info tbody tr').each(($row) => {
      cy.wrap($row).find(cart.cartPriceField).should('be.visible');
      cy.wrap($row).find(cart.cartQuantityField).should('be.visible');
      cy.wrap($row).find(cart.cartTotalField).should('be.visible');
    });
  });
});