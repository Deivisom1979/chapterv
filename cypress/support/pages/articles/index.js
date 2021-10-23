const el = require('./elements').ELEMENTS

const nomeArtigo = 'Nome do artigo' + new Date().getTime()

class Articles {
  // Acesso ao formulário
  acessarFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // Preencher o formulário
  preencherFormulario () {
    cy.get(el.inputTitle).type(nomeArtigo)
    cy.get(el.inputDescription).type('Descrição do artigo do teste')
    cy.get(el.inputBody).type('O rato roeu a roupa do rei de roma')
    cy.get(el.inputTags).type('cypress')
  }

  // Submeter o formulário
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // Verificar se o artigo foi criado
  verificarArtigo () {
    cy.contains(nomeArtigo).should('be.visible')
    cy.get('h1').should('have.text', nomeArtigo)
  }
}

export default new Articles()
