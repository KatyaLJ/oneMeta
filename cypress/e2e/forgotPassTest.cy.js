//import { onHomePage } from "../support/page_objects/homePage"
import { onForgotPassPage } from "../support/page_objects/forgotPasswordPage"

const data = require ('../e2e/data.json')

describe('Test with Page Objects', ( ) =>{

    beforeEach('open application', () =>{
        cy.openHomePage()
    })

    it('should open forgot password page', () =>{
      onForgotPassPage.forgotPassword()
      onForgotPassPage.cancelAndReturn()
      onForgotPassPage.forgotPassword()
      onForgotPassPage.resetPassword(data.correo)

    })
})