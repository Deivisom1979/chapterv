/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      /* RouteMatcher */

      // hostname = https://api.realworld.io
      // path = /api/users
      // method = POST

      // URL Completa = hostname + path
      // hostname
      // path c/ query params
      // path s/ query params

      method: 'POST',
      path: '/api/users'
    }, {
      /* RouteHandler */
      statusCode: 200,
      fixture: 'cadastro-com-sucesso.json'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username').type('ChapterV')
    cy.get('[placeholder=Email').type('ChapterV@mail.com')
    cy.get('[placeholder=Password').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      /* RouteHandler */
      statusCode: 422,
      fixture: 'usuario-existente.json'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username').type('ChapterV')
    cy.get('[placeholder=Email').type('ChapterV@mail.com')
    cy.get('[placeholder=Password').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('E-mail já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      /* RouteHandler */
      statusCode: 422,
      fixture: 'email-existente.json'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username').type('ChapterV')
    cy.get('[placeholder=Email').type('ChapterV@mail.com')
    cy.get('[placeholder=Password').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
