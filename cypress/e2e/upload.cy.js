/// <reference types="Cypress" />
import 'cypress-file-upload';



describe('Automation OneMeta', () => {
  beforeEach(() =>{
    cy.clearCookies()
    cy.visit('https://qa.verbumsuite.ai/login').wait(1500)
  })

  it ('Audio Upload .mp3',() =>{

    cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get('.submit-register').click()
    cy.get('._link__container_ca786_1 > :nth-child(2)').click()
    cy.get('._action_button_gzio9_33').click()
    cy.get('[type= "file"]').selectFile('cypress/Audio/Test1.mp3', {force: true})
    cy.get('[type="button"]').click()
   
  })

  it ('Audio Upload .mp4',() =>{

    cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get('.submit-register').click()
    cy.get('._link__container_ca786_1 > :nth-child(2)').click()
    cy.get('._action_button_gzio9_33').click()
    cy.get('[type= "file"]').selectFile('cypress/Audio/Test2.mp4', {force: true})
    cy.get('[type="button"]').click()

  })

  it ('Audio Upload .wav',() =>{

    cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get('.submit-register').click()
    cy.get('._link__container_ca786_1 > :nth-child(2)').click()
    cy.get('._action_button_gzio9_33').click()
    cy.get('[type= "file"]').selectFile('cypress/Audio/Test4.wav', {force: true})
    cy.get('[type="button"]').click()
    

  })

  it ('Audio Upload .opus',() =>{

    cy.get('#email').should('be.visible').type('naomi@olinadt.com')
    cy.get('#password').should('be.visible').type('Testing123.')
    cy.get('.submit-register').click()
    cy.get('._link__container_ca786_1 > :nth-child(2)').click()
    cy.get('._action_button_gzio9_33').click()
    cy.get('[type= "file"]').selectFile('cypress/Audio/Test3.opus', {force: true})
    cy.get('[type="button"]').click()

  })
 



})


      




    
