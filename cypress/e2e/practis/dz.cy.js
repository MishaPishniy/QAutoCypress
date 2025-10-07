/// <reference types="cypress" />

describe('Basic queries', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: { username: 'guest', password: 'welcome2qauto' },
    });
  });

  it('displays two todo items by default', () => {
   cy.contains('a.btn.header-link', 'Home').click()
    git initcy.contains('button', 'Contacts').click(); 
})
})
