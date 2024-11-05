describe('contact page', () => {
    beforeEach(() => {
    cy.visit("https://trytestingthis.netlify.app/");
  });

  it('visit contact page', () => {
    cy.get('[href="/contact"]').click()
    cy.wait(1000)
    cy.url().should("not.eq", "https://trytestingthis.netlify.app");
    cy.contains('Created by Oviya Kandaswamy').should('be.visible', 'Created by Oviya Kandaswamy')
    cy.contains('Home').click()
    cy.wait(1000)
    cy.url().should('not.include', "/contact")
  })
 })