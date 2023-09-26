describe('Settings test', ( ) =>{
     beforeEach('open application', () =>{
         cy.openHomePage() 
    })

    it.only('Change name and company', () => {
        cy.get('#email').type('naomi@olinadt.com')
        //cy.get('#email').should('be.visible').type('').should('to.have.length.of.at.most(100)')
          cy.get('#password').should('be.visible').type('Testing123.')
          cy.get('.submit-register').click()
        cy.get(':nth-child(5) > ._link_yw6ts_1 > span').click()
        cy.get('.card-header-settings > button').click()
        //cy.get('#fullName').clear()
        cy.get('[placeholder="First and Last Name"]').clear().type('Katya')
        cy.get('._formSection_1h53g_155 > :nth-child(3) > .form-section > .form-input-section > #company').should('exist').clear().type('ADT')
        cy.get('[class="_custom-button_dwkkt_1 _custom-button--primary_dwkkt_25 _custom-button--block_dwkkt_35"]').should('be.visible').click()
        
    })
    
})
//cy.get('._formSection_1h53g_155 > :nth-child(3) > .form-section > .form-input-section > #company')