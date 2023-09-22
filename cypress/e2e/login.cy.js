/// <reference types="Cypress" />

describe('Automation OneMeta', () => {
  beforeEach(() =>{
    cy.clearCookies()
    cy.visit('https://qa.verbumsuite.ai/login').wait(1500)
    /* cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get("[class='submit']").click() */
  })


//hacer login con correo y contraseña correctos
it('login', ()=>{
  cy.get('#email').should('have.length.of.at.most, 50').type('naomi@olinadt.com')
  //cy.get('#email').should('be.visible').type('').should('to.have.length.of.at.most(100)')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get("[class='submit']").click()
})

//hacer login con correo sin terminación .com
  it('login2', ()=>{
    cy.get('#email').should('be.visible').type('naomi@olinadt').wait(3000)
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get("[class='submit']").click()
    cy.get('.go2072408551').should('exist').wait(1500)
    cy.get('#email').should('be.visible').clear().type('naomi@olinadt.com')
    cy.get("[class='submit']").click()
  })

//
  it('edit profile', () => {
    cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.') 
    cy.get("[class='submit']").click()
    cy.get(':nth-child(5) > ._link_qxb4u_1 > span').should('exist').click()
    cy.get('button > img').should('exist').click()
    cy.get('._formSection_104za_155 > :nth-child(1) > .form-section > .form-input-section > #fullName')
    .clear().type('Melissa').should('have.value', 'Melissa')
    cy.get('#email').should('have.value', 'naomi@olinadt.com')
    cy.get('._formSection_104za_155 > :nth-child(3) > .form-section > .form-input-section > #company').should('exist')
    .clear().type('OLIN')
    cy.get('._custom-button--primary_i10ie_25').should('exist').click()
  })

 
 
})

//[placeholder="Email"]