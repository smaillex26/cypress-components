describe('Scroll to Top Component Tests', () => {
  beforeEach(() => {
    cy.visit('../../src/scroll-to-top.html');
  });

  // Test 1
  it('show the scroll-to-top button when scrolling down', () => {
    
    cy.get('.fixed.bottom-3.right-3').should('not.be.visible');
    
    
    cy.contains('button', 'Scroll').click();
    
    
    cy.wait(500);
    
    
    cy.get('.fixed.bottom-3.right-3').should('be.visible');
  });

  // Test 2
  it('scroll to top and hide the button when you click on scroll-to-top button', () => {
    
    cy.contains('button', 'Scroll').click();
    cy.wait(500);
    
    
    cy.get('.fixed.bottom-3.right-3').should('be.visible');
    
    
    cy.get('.fixed.bottom-3.right-3 button').click();
    
    
    cy.wait(500);
    
    
    cy.get('.fixed.bottom-3.right-3').should('not.be.visible');
    
    
    cy.window().then((win) => {
      expect(win.pageYOffset).to.be.lessThan(100);
    });
  });
});
