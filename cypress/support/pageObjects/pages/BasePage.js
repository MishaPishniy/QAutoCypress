/// <reference types="cypress" />

export default class BasePage {

    constructor() {
        this.BaseURL = 'https://www.saucedemo.com/'
    }

    open(url) {
        cy.visit(`${this.BaseURL}${url}`)
    }
}

