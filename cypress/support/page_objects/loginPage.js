export class LoginPage {

    loginwithEmailAndPassword(email,password){
        cy.get('form').then( form =>{
            cy.wrap(form).find('[placeholder="Email"]').should('have.attr', 'placeholder', 'Email').type(email)
            cy.wrap(form).find('[placeholder="Password"]').should('have.attr', 'placeholder', 'Password').type(password)
            cy.wrap(form).find('[type="checkbox"]').should('have.prop', 'disabled', false).check({force:true})
            cy.wrap(form).find('.eye-img').should('not.be.checked').click()
            cy.wrap(form).should('be.visible').submit()
        })
    }
}
export const onLoginPage = new LoginPage()


//.should('to.have.length.of.at.most, 50');


