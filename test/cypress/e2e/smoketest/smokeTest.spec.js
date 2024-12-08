describe('Smoke Test - Online Store', () => {
    before(() => {
      cy.visit('/');
    });
  
    it('should load the homepage and check for essential elements', () => {
      cy.get('#carouselProductList').should('exist'); 
      cy.get('#product-search-input').should('exist');
      cy.get('#cart-link').should('exist'); // Check for the cart link
      cy.get('.category-name').should('have.length.greaterThan', 1); 
      cy.get('.product-list-item').should('have.length.greaterThan', 0);
    });
  });