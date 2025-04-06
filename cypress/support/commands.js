// Este arquivo permite a adição de comandos personalizados que podem ser usados em testes. 
// Comandos personalizados ajudam a simplificar e reutilizar código.

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

