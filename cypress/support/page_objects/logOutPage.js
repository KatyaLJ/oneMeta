export class LogOutPage {

    clickOnLogOutButton(){
        cy.get('._logout__container_ca786_22').click()
        cy.get('._saveButtonEnable_1h53g_112').click().wait(1500)

    }
}

export const onLogOutPage = new LogOutPage()