/// <reference types="cypress" />

describe('Basic queries', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
  });

  it('displays two todo items by default', () => {
   cy.contains('a.btn.header-link', 'Home').click()
    cy.contains('button', 'Contacts').click(); 
})
})
