/// <reference types="cypress" />

describe('Articles', () => {
  it('Cadastro de novo artigo com sucesso', () => {
    // Fluxo de login
    cy.visit('login')
    cy.get('[placeholder=Email').type('ChapterV@mail.com')
    cy.get('[placeholder=Password').type('123456')

    cy.contains('button', 'Sign in').click()

    // Fluxo de criação do artigo

    const nomeArtigo = 'Nome do artigo' + new Date().getTime()

    cy.get('[href*=editor]').click()
    cy.get('[ng-model$=title]').type(nomeArtigo)
    cy.get('[ng-model$=description]').type('Descrição do artigo do teste')
    cy.get('[ng-model$=body]').type('O rato roeu a roupa do rei de roma')
    cy.get('[ng-model$=tagField]').type('cypress')

    cy.contains('button', 'Publish Article').click()

    cy.contains(nomeArtigo).should('be.visible')
    cy.get('h1').should('have.text', nomeArtigo)
  })
})
