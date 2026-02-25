describe('TodoList Component Tests', () => {
  beforeEach(() => {
    cy.visit('../../src/index.html', { baseUrl: null });
  });

  // Test: Ajouter quatre todos puis supprimer la deuxième et vérifier qu'il ne reste que 3 todos
  it('should add four todos, delete the second one, and verify only 3 todos remain', () => {
    // Ajouter la première todo
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 1');
    cy.get('button[type="submit"]').click();
    
    // Ajouter la deuxième todo
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 2');
    cy.get('button[type="submit"]').click();
    
    // Ajouter la troisième todo
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 3');
    cy.get('button[type="submit"]').click();
    
    // Ajouter la quatrième todo
    cy.get('input[placeholder="What needs to be done?"]').type('Todo 4');
    cy.get('button[type="submit"]').click();
    
    // Vérifier que 4 todos sont présentes
    cy.get('[x-text="todo.content"]').should('have.length', 4);
    
    // Vérifier le compteur affiche 4
    cy.contains('Nombre de tâche(s) :').parent().should('contain', '4');
    
    // Supprimer la deuxième todo en cliquant sur la croix associée
    cy.get('button[type="button"]').eq(1).click();
    
    // Vérifier qu'il ne reste que 3 todos
    cy.get('[x-text="todo.content"]').should('have.length', 3);
    
    // Vérifier le compteur affiche 3
    cy.contains('Nombre de tâche(s) :').parent().should('contain', '3');
    
    // Vérifier que les bonnes todos restent (1, 3, 4)
    cy.get('[x-text="todo.content"]').eq(0).should('contain', 'Todo 1');
    cy.get('[x-text="todo.content"]').eq(1).should('contain', 'Todo 3');
    cy.get('[x-text="todo.content"]').eq(2).should('contain', 'Todo 4');
  });
});
