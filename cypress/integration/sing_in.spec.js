/// <reference types="cypress" />

describe('Autenticação', () => {
    it('Efetuar login com usuário e senha válidos', () => {
        // acessar o site
        cy.visit('/');

        // clicar no botão sign in
        cy.get('.nav-link') // 4 elementos
            .contains('Sign in')
            .click()
        
        const user = Cypress.env('user').email
        const pass = Cypress.env('user').password
        
        // informar usário e senha
        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)
        
        // clicar no botão entrar
        cy.get('[type=button]').click()

        // verificar se você foi autenticado
        cy.get('.nav-pills a.nav-link')
            .should('have.length', 2)

        //deve conter o tamanho =2

        cy.get('.nav-pills a.nav-link') // 2 elementos
            //posicao -eq, first, last
           .first() // = eq(0)
           .should('contain.text', 'Your Feed')
        
        
    });
});
