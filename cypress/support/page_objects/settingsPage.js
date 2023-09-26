export class SettingsPage {
    changePersonalInformation(name, company){
        
        cy.get('[class="settings-card-content-container"]').then(settings => {
            cy.wrap(settings).find('button').click()
            cy.wrap(settings).find('#fullName').clear()
            cy.wrap(settings).find('#fullName').type(name)
            cy.wrap(settings).find('#company').clear()
            cy.wrap(settings).find('#company').type(company) 
            cy.wrap(settings).find('[class="_custom-button_dwkkt_1 _custom-button--primary_dwkkt_25 _custom-button--block_dwkkt_35"]').submit()         
        })
    }
    
}



export const onSettingsPage = new SettingsPage ()