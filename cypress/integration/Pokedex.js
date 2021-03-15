describe('Pokedex', function () {

  // 如果配置了 baseURL 可以使用相对路径
  // beforeEach(function(){cy.visit('http://localhost:8080')})

  it('front page can be opened', function () {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('Navigation work fine', function() {
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
  })
})

