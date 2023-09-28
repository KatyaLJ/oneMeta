/// <reference types="Cypress" />
import 'cypress-file-upload';

//hacer login con correo y contraseña correctos
it('login', ()=>{
})

describe('Home Page', () => {
  beforeEach(() =>{
    cy.clearCookies()
    cy.visit('https://qa.verbumsuite.ai/login').wait(1500)
    cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get('.submit-register').click()
    //cy.get('._right_fsene_25').click()
    //cy.get('[type= "file"]').selectFile('cypress/Audio/Test1.mp3', {force: true})
    cy.get('.css-1483le-control').click()
    //cy.get('#react-select-2-option-3').select('Spanish (Mexico)')
    
    


    
  })

  describe('File upload', () => {
    it('should upload a file', () => {
    });
    });



})