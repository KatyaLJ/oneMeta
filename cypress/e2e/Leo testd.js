//import Login from 'cypress\e2e\Page Object\Login.ts'
///<reference types = "cypress"/>
describe(' One Meta automation - VerbumMettings', () => {
    it('Enter page', () => {
      cy.visit('https://dev.verbum.ai/login')
    })
  
  
    it('Login', () => {
      cy.contains("Digite seu e-mail aqui").click().type('barbosa.olivera09@gmail.com')
      
    })
  })