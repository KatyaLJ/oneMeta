//test to fail
import { onTestToFailLength } from '../support/page_objects/testToFailLength'
const data = require ('../e2e/data.json')


describe('Test for text length in an input', () => {
    beforeEach('open application', () =>{
        cy.openHomePage()
    })
    
    it('Test for email format and not to have more length than 50 characters in an input', () => {
      onTestToFailLength.emailInputLength(data.emailtofail)
  })

  it('Should check password format and not to have more length than 10 characters in an input', () => {
    onTestToFailLength.passwordInputLength(data.passtofail)
})
})
  



/* describe('Test for email format and length in an input', () => {
    it('Should check email format and length in an input', () => {
      // Visit the page containing the input field
      cy.visit('https://your-website.com/page-with-input')
  
      // Find the input field by its selector (e.g., its "id" attribute)
      cy.get('#my-input')
        .type('example@email.com') // Type an email address
  
      // Get the current value of the input field
      cy.get('#my-input').invoke('val').then((text) => {
        // Check email format using a regular expression
        expect(text).to.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  
        // Check text length (e.g., between 5 and 50 characters)
        expect(text.length).to.be.within(5, 50) // Adjust the range as needed
      }) */
  
/* // passwordLengthFormat.spec.js

describe('Test for password format and length in an input', () => {
  it('Should check password format and length in an input', () => {
    // Visit the page containing the input field
    cy.visit('https://your-website.com/page-with-input')

    // Find the input field by its selector (e.g., its "id" attribute)
    cy.get('#password-input')
      .type('My$ecureP@ss1') // Type a password with a special symbol

    // Get the current value of the input field
    cy.get('#password-input').invoke('val').then((password) => {
      // Check password format using the updated regular expression
      expect(password).to.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]){8,}$/)

      // Check text length (e.g., between 8 and 20 characters)
      expect(password.length).to.be.within(8, 20) // Ajusta el rango según tus requisitos
    })

  })
})
*/


  