describe('Login by env', () => {
  it('logs in', () => {
    cy.visit('/') // бере baseUrl з config

        debugger;
        cy.get('[data-test="username"]').type(Cypress.env('USER_NAME'));
        cy.get('[placeholder="Password"]').type(Cypress.env('USER_PASS'));
        cy.get('[data-test="login-button"]').click();
  })
})
