/// <reference types="cypress" />

describe('Articles', () => {
  // Hook -> Trechos executados antes/depois do teste
  beforeEach('', () => {
    cy.request({
      url: 'https://api.realworld.io/api/users/login',
      method: 'POST',
      body: {
        user: {
          email: 'ChapterV@mail.com',
          password: '123456'
        }
      }
    }).then(response => {
      // console.log(response)
      // JSON PATH -> navegação através de um json
      console.log(response.body.user.token)

      window.localStorage.setItem('jwtToken', response.body.user.token)
    })
    cy.visit('/')
  })
  it('Cadastro de novo artigo com sucesso', () => {
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
