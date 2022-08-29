require("cypress-xpath");
const mainPage = "https://telnyx.com/";
const acceptCoockiesBtn = '[class="sc-5d3a275a-0 jdjrgE"]';
const emailInput = '[type="email"]';
const submitBtn = '[type="submit"]';

import SignUpPage from "../../../Pages/SignUpPage";
describe("Try free test", () => {
  it("Test the “Try free” banner", () => {
    const signUpPage = new SignUpPage();
    const randomEmail = signUpPage.randomEmailGenerator();
    cy.visit(mainPage);
    cy.wait(2000);
    cy.get(acceptCoockiesBtn).first().click();
    cy.wait(1000);
    cy.get(emailInput).type(randomEmail);
    cy.get(submitBtn).click();
    signUpPage.emailInput().should("have.value", randomEmail);
  });
});
