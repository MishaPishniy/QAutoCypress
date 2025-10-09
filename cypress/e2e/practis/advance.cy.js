/// <reference types="cypress" />

describe('Advance queries', () => {
  
    it('Clear', () => {
          cy.visit('https://www.saucedemo.com/')  
           cy.get('[placeholder="Username"]').type('Test string')
           cy.get('[placeholder="Username"]').clear()
            cy.get('[placeholder="Username"]').type('Test string2')
  
    })

      
    it('Select', () => {
          cy.visit('https://practice.expandtesting.com/dropdown')  
           cy.get('#country').select('BE')
        cy.get('#country').select('Bahrain')
  
    })


          
    it('Check', () => {
        cy.visit('https://practice.expandtesting.com/checkboxes')  
        //cy.get('#checkbox1').click();
        cy.get('#checkbox1').check();
        cy.get('#checkbox2').uncheck();

    })


        it('scrollIntoView', () => {
       cy.visit('https://www.saucedemo.com/')  
        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('[data-test="login-button"').as('loginButton')
        cy.get('@loginButton').click();
        cy.get('[data-test="footer"]').scrollIntoView();
    })



    
    it('submit', () => {
       cy.visit('https://www.saucedemo.com/')  
        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('form').submit();
       // cy.get('[data-test="login-button"').as('loginButton')
       // cy.get('@loginButton').click();
        cy.get('[data-test="footer"]').scrollIntoView();
    })

   it('selectfile', () => {
       cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')  
        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')
        cy.get('form').submit();
    })


        it('go', () => {
       cy.visit('https://www.saucedemo.com/')  
        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('form').submit();
        cy.go('back');
        cy.go('forward');
        cy.wait(2000); 
        cy.reload();
        cy.get().should('contain.text')
    })


    
        it('should', () => {
        cy.visit('https://www.saucedemo.com/')  
        cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username') 
         .should('have.css', 'background-color' , 'rgb(255, 255, 255)')
      
        cy.get('[placeholder="Password"]').type('secret_sauce')
   
        cy.contains('Login').should('have.css', 'background-color' , 'rgb(61, 220, 145)')
        
        cy.contains('Login').should('not.have.css', 'background-color' , 'rgb(61, 120, 145)')
   


    const name = 'Alice'
    expect(name).to.eq('Alice')
    })
   
    
})
