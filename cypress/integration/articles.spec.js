// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
    it('Criar um novo artigo', function () {
        cy.login()


        cy.get('a[href$=editor]').click();
        cy.get('input[placeholder="Article title"]').type('Who is Daron Malakian ?');
        cy.get('input[placeholder="What is this article about?"]').type('Who is Daron Malakian ?');
        cy.get('form textarea').type('Guitarrist and composer of System of a Down')
        cy.get('input[placeholder="Enter tags"]').type('systemofadown');
        cy.get('button.btn-primary').contains('Publish article').click();

        //
        cy.get('h1').should('contain.text', 'Who is Daron Malakian ?')
        /* ==== End Cypress Studio ==== */
    });

});
