export class SettingsPage {

    buttonEdit(){
        cy.get('[class="settings-card-content-container"]').then(edit => {
            cy.wrap(edit).find('button').click()
    })
    }

    changePersonalInformation(fullName, company){
        
        cy.get('._modalBodyContainer_1h53g_1').then(settings => {
            cy.wrap(settings).find('#fullName').clear()
            cy.wrap(settings).find('#fullName').type(fullName)
            cy.wrap(settings).find('#company').clear()
            cy.wrap(settings).find('#company').type(company) 
            cy.wrap(settings).find('._custom-button--primary_dwkkt_25').click()         
        })
    }
    
}



export const onSettingsPage = new SettingsPage ()