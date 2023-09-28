//test to fail

export class TestToFailLength {

    emailInputLength(email){
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Email"]').invoke('val').then((text) => {
        expect(text).to.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
        expect(text.length).not.to.be.within(5, 50)
   
    })
    }

    passwordInputLength(password){
        cy.get('[placeholder="Password"]').type(password)
        cy.get('[placeholder="Password"]').invoke('val').then((password) => {
        expect(password).to.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]){8,}$/)
        expect(password.length).not.to.be.within(8, 10)
    })
    }

    
}
export const onTestToFailLength  = new TestToFailLength ()

/*     it('Test for email format and not to have more length than 50 characters in an input', () => {
      cy.get('[placeholder="Email"]').type('thisisasampletoprovetheallowedlengthoftheinputfield@mail.com')
  
      // Get the current value of the input field
      cy.get('[placeholder="Email"]').invoke('val').then((text) => {
        // Check email format using a regular expression
        expect(text).to.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  
        // Check text length (e.g., between 5 and 50 characters)
        expect(text.length).not.to.be.within(5, 50) // Adjust the range as needed
   
    })
  })

  it('Should check password format and not to have more length than 10 characters in an input', () => {
  
    // Find the input field by its selector (e.g., its "id" attribute)
    cy.get('[placeholder="Password"]').type('My$ecureP@ss1sample') // Type a password with a special symbol

    // Get the current value of the input field
    cy.get('[placeholder="Password"]').invoke('val').then((password) => {
      // Check password format using the updated regular expression
      expect(password).to.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]){8,}$/)
      // Check text length (e.g., between 8 and 20 characters)
      expect(password.length).not.to.be.within(8, 10) // Ajusta el rango según tus requisitos
    })

})


loginwithEmailAndPassword(email,password){
    cy.get('form').then( form =>{
        cy.wrap(form).find('[placeholder="Email"]').should('have.attr', 'placeholder', 'Email').type(email)
        cy.wrap(form).find('[placeholder="Password"]').should('have.attr', 'placeholder', 'Password').type(password)
        cy.wrap(form).find('[type="checkbox"]').should('have.prop', 'disabled', false).check({force:true})
        cy.wrap(form).find('.eye-img').should('not.be.checked').click()
        cy.wrap(form).should('be.visible').submit()
    })
} */