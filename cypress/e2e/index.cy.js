/// <reference types="cypress"/>

describe('home page', () => {
  it('visit the home page', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('h1').as('Header')
    cy.get('@Header').contains('Your Website to practice Automation Testing')
  })
})