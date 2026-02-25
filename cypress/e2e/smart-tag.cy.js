describe('Smart Tag Component Tests', () => {
  beforeEach(() => {
    cy.visit('../../src/smart-tag.html');
  });

  // Test 1
  it('should show the tag when hovering over the "See more" button', () => {
    
    cy.get('[x-show="isActive"]').should('not.be.visible');
    
    
    cy.contains('div', 'See more').trigger('mouseover');
    
    
    cy.get('[x-show="isActive"]').should('be.visible');
  });

  // Test 2
  it('should hide the tag when moving the mouse away from the "See more" button', () => {
    
    cy.contains('div', 'See more').trigger('mouseover');
    
   
    cy.get('[x-show="isActive"]').should('be.visible');
    
    
    cy.get('body').click(0, 0);
    
    
    cy.get('[x-show="isActive"]').should('not.be.visible');
  });
});
