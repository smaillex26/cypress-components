describe('Modal Component Tests', () => {
  beforeEach(() => {
    cy.visit('../../src/modal.html', { baseUrl: null });
  });

  // Test 1
  it('open the modal when you click on the Display button', () => {
    
    cy.get('[x-show="isModalVisible"]').should('not.be.visible');
    
    
    cy.contains('button', 'Display').click();
    
    
    cy.get('[x-show="isModalVisible"]').should('be.visible');
  });

  // Test 2
  it('close the modal when click outside', () => {
    
    cy.contains('button', 'Display').click();
    cy.get('[x-show="isModalVisible"]').should('be.visible');
    
    
    cy.get('[x-show="isModalVisible"]').click({ force: true, position: 'topLeft' });
    
    
    cy.get('[x-show="isModalVisible"]').should('not.be.visible');
  });

  // Test 3
  it('should display Lorem Ipsum in h2 tag inside the modal', () => {
    
    cy.contains('button', 'Display').click();
    
    
    cy.get('[x-show="isModalVisible"]').within(() => {
      cy.get('h2').should('contain', 'Lorem Ipsum');
    });
  });
});
