/// <reference types="cypress" />

describe('Cypress basics', ()=> {
    it.only('Should visit a paçe and assert tittle', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    
    //const tittle = cy.title()
    //console.log(title)

    cy.pause()
    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')
    
    cy.title()
    .should('be.equal', 'Campo de Treinamento')
    .and('contain', 'Campo')
    //TODO imprimir o log no console
    //TODO escrever o log em um campo de texto
})
it('should find and intereact with an element' , () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple')
    .click()
    .should('have.value', 'Obrigado!')
})

})