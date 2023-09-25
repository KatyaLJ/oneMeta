//import { onHomePage } from "../support/page_objects/homePage"
import { onLoginPage } from "../support/page_objects/loginPage"
import { onLogOutPage } from "../support/page_objects/logOutPage"
import { navigateTo } from "../support/page_objects/navigationPage"
//import { onMyFilesPage } from "../support/page_objects/myFilesPage"
//import { onMyFilesPage } from "../support/page_objects/myFilesPage"

describe('Test with Page Objects', ( ) =>{

    beforeEach('open application', () =>{
        cy.openHomePage()
    })

   /*  it('verify navigations across the pages', () =>{
      

    }) */

    it('should login', () => {
        
        onLoginPage.loginwithEmailAndPassword('naomi@olinadt.com', 'Testing123.')
        //onLogOutPage.clickOnLogOutButton()
        navigateTo.homePage()
        navigateTo.uploadPage()
        navigateTo.myFilesPage()
        navigateTo.realTimePage()
        navigateTo.settingsPage()
        onLogOutPage.clickOnLogOutButton()
    })
})