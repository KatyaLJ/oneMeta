//import { onHomePage } from "../support/page_objects/homePage"
import { onForgotPassPage } from "../support/page_objects/forgotPasswordPage"
import { onLoginPage } from "../support/page_objects/loginPage"
import { onLogOutPage } from "../support/page_objects/logOutPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSettingsPage } from "../support/page_objects/settingsPage"
import { onSignInPage } from "../support/page_objects/signInPage"
import { onUploadPage } from "../support/page_objects/uploadPage"

//import { onMyFilesPage } from "../support/page_objects/myFilesPage"
//import { onMyFilesPage } from "../support/page_objects/myFilesPage"

const data = require ('../e2e/data.json')

describe('Test with Page Objects', ( ) =>{

    beforeEach('open application', () =>{
        cy.openHomePage()
    })

    it('Sign In', () =>{
       
       onSignInPage.signIn()
       onSignInPage.signInwithNameAndLast(data.name, data.lastname, data.correo, data.password)
       onSignInPage.returnToLogIn()

    })

    it('Reset Password', () =>{
       
        onForgotPassPage.forgotPassword()
        onForgotPassPage.cancelAndReturn()
        onForgotPassPage.forgotPassword()
        onForgotPassPage.resetPassword(data.correo)
            
    })

    it('complete flow', () => {
      
        onLoginPage.loginwithEmailAndPassword(data.correo, data.password)
        //onLogOutPage.clickOnLogOutButton()
        navigateTo.homePage()
        navigateTo.uploadPage()
        onUploadPage.AudioUploadmp3()
        onUploadPage.AudioUploadmp4()
        onUploadPage.AudioUploadWav()
        onUploadPage.AudioUploadOpus()
        navigateTo.myFilesPage()
        navigateTo.realTimePage()
        navigateTo.settingsPage()
        onSettingsPage.buttonEdit()
        onSettingsPage.changePersonalInformation(data.fullName, data.company)
        onLogOutPage.clickOnLogOutButton()
    })

})