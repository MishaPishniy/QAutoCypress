/// <reference types="cypress" />

describe('Commands', () => {
  
   
     it.only('Login', () => {
        cy.visit('https://www.saucedemo.com/')  
        cy.login('standard_user','secret_sauce')
     })

})