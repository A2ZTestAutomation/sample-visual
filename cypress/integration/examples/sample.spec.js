/// <reference types='cypress' />

describe('First Visual testing sample', () => {
    it('Sample snapshot test', () => {
        cy.visit('http://example.com')
        cy.viewport('ipad-2')
        //To compare the screen
        //   cy.viewport('iphone-6')
            //  cy.viewport('ipad-2')
        //  cy.matchImageSnapshot()
    })
})

