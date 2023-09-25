export class ForgotPassPage {

    forgotPassword(){
        cy.get('form').then( form =>{
            cy.wrap(form).find('.forgot-password').should('have.class', 'forgot-password').click()
           
        })
    }
    resetPassword(email){
        cy.get('form').then(form =>{
            cy.wrap(form).find('[placeholder="Email"]').should('have.attr', 'placeholder', 'Email').type(email)
            cy.wrap(form).find('.submit').should('contain', 'Reset').click() 
            cy.get('.go2072408551').should('contain', 'Reset instructions sent!')
            cy.get('.cancel-reset').should('contain', 'Cancel').click()
        })
    }
    cancelAndReturn(){
        cy.get('.cancel-reset').should('contain', 'Cancel').click().wait(2000)
    }
}
export const onForgotPassPage = new ForgotPassPage()


//forgot-password
//class="submit forgot-submit" cy.get('.submit') 

//.get('.go2072408551')
//cy.get('.cancel-reset')

/*cy.wrap(form).find('[placeholder="Password"]').should('have.attr', 'placeholder', 'Password').type(password)
cy.wrap(form).find('[type="checkbox"]').should('have.prop', 'disabled', false).check({force:true})
cy.wrap(form).find('.eye-img').should('not.be.checked').click()
cy.wrap(form).should('be.visible').submit()*/