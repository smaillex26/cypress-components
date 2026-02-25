describe('TodoList Component Tests', () => {
  beforeEach(() => {
    cy.visit('../../src/index.html');
  });

  // Test: Ajouter quatre todos puis supprimer la deuxième et vérifier qu'il ne reste que 3 todos
  it('should add four todos, delete the second one, and verify only 3 todos remain', () => {
    
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 1');
    cy.get('button[type="submit"]').click();
    
    
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 2');
    cy.get('button[type="submit"]').click();
    
    
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 3');
    cy.get('button[type="submit"]').click();
    
    
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 4');
    cy.get('button[type="submit"]').click();
    
    
    cy.get('[x-text="todo.content"]').should('have.length', 4);
    
    
    cy.contains('Nombre de tâche(s) :').parent().should('contain', '4');
    
  
    cy.get('button[type="button"]').eq(1).click();
    
   
    cy.get('[x-text="todo.content"]').should('have.length', 3);
    
  
    cy.contains('Nombre de tâche(s) :').parent().should('contain', '3');
    
    
    cy.get('[x-text="todo.content"]').eq(0).should('contain', 'Todo 1');
    cy.get('[x-text="todo.content"]').eq(1).should('contain', 'Todo 3');
    cy.get('[x-text="todo.content"]').eq(2).should('contain', 'Todo 4');
  });
});
