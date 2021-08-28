/// <reference types="cypress" />

describe('Cypress basics', ()=> {
    it('Should visit a paçe and assert tittle', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    
    //const tittle = cy.title()
    //console.log(title)

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')
    
    cy.title()
    .should('be.equal', 'Campo de Treinamento')
    .and('contain', 'Campo')
})
it.only('should find and intereact with an element' , () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple')
    .click()
    .should('have.value', 'Obrigado!')
})

})