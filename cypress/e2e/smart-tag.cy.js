describe('Smart Tag Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/src/smart-tag.html');
  });

  // Test 1: Tester l'apparition du tag au survol du bouton "See more"
  it('should show the tag when hovering over the "See more" button', () => {
    // Vérifier que le tag n'est pas visible initialement
    cy.get('[x-show="isActive"]').should('not.be.visible');
    
    // Survoler le bouton "See more"
    cy.contains('div', 'See more').trigger('mouseover');
    
    // Vérifier que le tag est maintenant visible
    cy.get('[x-show="isActive"]').should('be.visible');
  });

  // Test 2: Tester la disparition du tag à la sortie du survol du bouton "See more"
  it('should hide the tag when moving the mouse away from the "See more" button', () => {
    // Survoler le bouton "See more"
    cy.contains('div', 'See more').trigger('mouseover');
    
    // Vérifier que le tag est visible
    cy.get('[x-show="isActive"]').should('be.visible');
    
    // Quitter le survol du bouton
    cy.contains('div', 'See more').trigger('mouseout');
    
    // Vérifier que le tag est maintenant caché
    cy.get('[x-show="isActive"]').should('not.be.visible');
  });
});
