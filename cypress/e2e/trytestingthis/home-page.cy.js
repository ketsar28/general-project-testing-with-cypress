/// <reference types="cypress"/>

//! right bar
describe("home page - right bar", function () {
  beforeEach(() => {
    cy.visit("https://trytestingthis.netlify.app/");
  });

  it("input text in the form", () => {
    cy.get("#fname").type("Ketsar");
    cy.get("#fname").should("have.value", "Ketsar");
    cy.get("#lname").type("Ali");
    cy.get("#lname").should("have.value", "Ali");
  });

  it("select one of gender", () => {
    cy.get('[type="radio"]').check("female");
  });

  it("choose option from dropdown menu", () => {
    cy.get('[name="option"]').select("Option 2");
  });

  it("select single value from datalist", () => {
    cy.get('[list="datalists"]').click().type("Vanilla");
  });

  it("upload file", () => {
    cy.get("#myfile").attachFile("foto.jpeg");
  });

  it("input string inside textarea box", () => {
    cy
      .get("textarea")
      .should("have.value", "The cat was playing in the garden.")
      ? cy.get("textarea").clear()
      : null;
    cy.get("textarea").type("i want to introduce my self. my name is ketsar");
  });

  it("click submit button in the right bar", () => {
    cy.get(".btn").click();
    cy.url().should("not.eq", "https://trytestingthis.netlify.app");
  });

  //   it('select date in the calendar element', () => {
  //     cy.get('[type="date"]').type('28122005')
  //   })

  it("input qty", () => {
    cy.get("#quantity").type(50);
  });

  it('change range', () => {
    cy.get('input[type=range]').as('range').invoke('val', 90).trigger('change')
  })
});

//! left bar
describe("home page - left bar", function () {
  beforeEach(() => {
    cy.visit("https://trytestingthis.netlify.app/");
  });

  it("click alert button in the left bar", () => {
    cy.get(".pop-up-alert > button")
      .click()
      .should("be.visible", "You Pressed the OK Button!");
  });

  it("input valid credential for login", () => {
    cy.get("#uname").should("be.enabled").type("test");
    cy.get("#pwd").should("be.enabled").type("test");
    cy.get('[type="submit"]').click();
    cy.contains("Login Successful").should("be.visible");
    cy.url().should("not.eq", "https://trytestingthis.netlify.app");
    cy.contains("here").should("be.visible").click();
    cy.url().should("not.include", "login.html?uname=test&pwd=test");
  });

  it("drag n drop image", () => {
    cy.get("#drag1")
      .drag("#div1")
      .then((success) => {
        assert.isTrue(success);
      });
  });
});


