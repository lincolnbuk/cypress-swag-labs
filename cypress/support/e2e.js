// Remover o uso de cy.screenshot() do contexto global, pois não é suportado fora dos testes
// O Cypress já tira screenshots automaticamente em falhas ao rodar com 'cypress run'.
// Se quiser customizar, use hooks dentro dos próprios testes ou em support/commands.js.
