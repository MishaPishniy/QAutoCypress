// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
        cy.get('[placeholder="Username"]').type(username)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('form').submit();
});

/*
Cypress.Commands.add('customCommand', () => {
  console.log('Original implementation of customCommand');
});

// Перевизначення команди
Cypress.Commands.overwrite('customCommand', (originalFn) => {
  console.log('New implementation of customCommand');
  // Виклик оригінальної функції
  originalFn();
});

// Виклик перевизначеної команди
cy.customCommand(); */


Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})
