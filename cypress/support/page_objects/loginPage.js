export class LoginPage {

    loginwithEmailAndPassword(email,password){
        cy.get('form').then( form =>{
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force:true})
            cy.wrap(form).find('.eye-img').click()
            cy.wrap(form).submit()
        })
    }
}
export const onLoginPage = new LoginPage()


//.should('to.have.length.of.at.most, 50');


