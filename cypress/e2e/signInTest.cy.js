import { onSignInPage } from "../support/page_objects/signInPage"
const data = require ('../e2e/data.json')



describe('Sign In test', ( ) =>{
    beforeEach('open application', () =>{
        cy.openHomePage() 
   })

    it('open sign in', () => {
        onSignInPage.signIn()
        onSignInPage.signInwithNameAndLast(data.name, data.lastname, data.correo, data.password)
        onSignInPage.returnToLogIn()
    })

   })