/// <reference types="cypress" />
import articles from '../support/pages/articles'
describe('Articles', () => {
  // Hook -> Trechos executados antes/depois do teste
  // Arrange
  beforeEach('', () => {
    cy.login()
    cy.visit('/')
  })
  it('Cadastro de novo artigo com sucesso', () => {
    // Fluxo de criação do artigo
    // Acesso ao formulário
    articles.acessarFormulario()
    // Preencher o formulário
    articles.preencherFormulario()
    // Submeter o formulário
    articles.submeterFormulario()
    // Verificar se o artigo foi criado
    articles.verificarArtigo()
  })
})
