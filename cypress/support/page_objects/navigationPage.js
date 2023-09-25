export class NavigationPage {
    
    homePage(){
        cy.get(':nth-child(1) > ._link_yw6ts_1').click()
    }
    uploadPage(){
        cy.get(':nth-child(2) > ._link_yw6ts_1').click()
    }
    myFilesPage(){
        cy.get(':nth-child(3) > ._link_yw6ts_1').click()
    }
    realTimePage(){
        cy.get(':nth-child(4) > ._link_yw6ts_1').click()
    }
    settingsPage(){
        cy.get(':nth-child(5) > ._link_yw6ts_1').click()
    }

    
}
export const navigateTo = new NavigationPage()


/*

function selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr =>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{

        formLayoutPage(){
            
            selectGroupMenuItem('Form')
            cy.contains('Form Layouts').click()
        }

        datepickerPage(){
           selectGroupMenuItem('Form')
            cy.contains('Datepicker').click()
        }

        toasterPage(){
            selectGroupMenuItem('Modal & Overlays')
            cy.contains('Toastr').click()
        }

        smartTablePage(){
            selectGroupMenuItem('Tables & Data')
            cy.contains('Smart Table').click()
        }

        tooltipPage(){
            selectGroupMenuItem('Modal & Overlays')
            cy.contains('Tooltip').click()
        }

}

export const navigateTo = new NavigationPage()*/