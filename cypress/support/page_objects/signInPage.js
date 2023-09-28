export class SignInPage {

    signIn(){
        cy.get('div').then(form =>{
            cy.wrap(form).find('.sign_up_link > a').should('contain', ' Sign up here').click()
        })
        }

    signInwithNameAndLast(name, last, email, password){
        cy.get('form').then( form =>{
            cy.wrap(form).find('[placeholder="First Name"]').should('have.attr', 'placeholder', 'First Name').type(name)
            cy.wrap(form).find('[placeholder="Last Name"]').should('have.attr', 'placeholder', 'Last Name').type(last)
            cy.get('[placeholder="Email"]').type(email)
            cy.get('[placeholder="Email"]').invoke('val').then((text) => {
                expect(text).to.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
                expect(text.length).to.be.within(5, 50)
                })
            cy.get('[placeholder="Password"]').type(password)
                cy.get('[placeholder="Password"]').invoke('val').then((password) => {
                expect(password).to.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!*])([A-Za-z\d@#$%^&+=!*]){8,}$/)
                expect(password.length).to.be.within(8, 20)
            cy.wrap(form).find('.eye-img').should('not.be.checked').click()
            cy.wrap(form).should('be.visible').submit()
                })
        })
        }
    
    //regresar a home
    returnToLogIn(){
        cy.get('div').then(form =>{
            cy.wrap(form).find('.sign_up_link > a').should('contain', ' Login here').click()
        })
        }
     
}

    /*forgotPassword(){
        cy.get('form').then( form =>{
            cy.wrap(form).find('.forgot-password').should('have.class', 'forgot-password').click()
           
        })
    } 
    
    loginwithEmailAndPassword(email,password){
        cy.get('form').then( form =>{
            cy.wrap(form).find('[placeholder="Email"]').should('have.attr', 'placeholder', 'Email').type(email)
            cy.wrap(form).find('[placeholder="Password"]').should('have.attr', 'placeholder', 'Password').type(password)
            cy.wrap(form).find('[type="checkbox"]').should('have.prop', 'disabled', false).check({force:true})
            cy.wrap(form).find('.eye-img').should('not.be.checked').click()
            cy.wrap(form).should('be.visible').submit()
        })
    } */

export const onSignInPage = new SignInPage()