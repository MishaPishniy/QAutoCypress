/// <reference types="cypress" />

import BasePage from "../../support/pageObjects/pages/BasePage";
import LoginPage from "../../support/pageObjects/pages/LoginPage";
import testData from "../../fixtures/cred.json";

describe('POM', () => { 

  beforeEach(() => {
    LoginPage.open();
  })


    it('Success login', ()=> {

        //cy.get('[data-test="username"]').type('standard_user');
        //cy.get('[placeholder="Password"]').type('secret_sauce');
        //cy.get('[data-test="login-button"]').click();

        LoginPage.login(testData.userName.theUserName , testData.password)

        cy.get('[data-test="title"]').should('have.text','Products');
        cy.url().should('include', 'inventory.html')
    })

    it('Error login', ()=> {

        //cy.get('[data-test="username"]').type('standard_user');
        //cy.get('[placeholder="Password"]').type('sect_sauce');
        //cy.get('[data-test="login-button"]').click();

        LoginPage.error()
        cy.get('[data-test="error"]').invoke('text').should('eq','Epic sadface: Username is required');
     
    })


     it(' Verify Error login', ()=> {

        //cy.get('[data-test="username"]').type('standard_user');
        //cy.get('[placeholder="Password"]').type('sect_sauce');
        //cy.get('[data-test="login-button"]').click();

        LoginPage.login(testData.errUserName , testData.errPassword)
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service')
     
    })

})