require("cypress-xpath");
import SignUpPage from "../../../Pages/SignUpPage";
describe("Try free test", () => {
  it("Test the “Try free” banner", () => {
    const signUpPage = new SignUpPage();
    const randomEmail = signUpPage.randomEmailGenerator();
    cy.visit("https://telnyx.com/");
    cy.wait(2000);
    cy.get('[class="sc-5d3a275a-0 jdjrgE"]').first().click();
    cy.wait(1000);
    cy.get('[type="email"]').type(randomEmail);
    cy.get('[type="submit"]').click();
    signUpPage.emailInput().should("have.value", randomEmail);
  });
});
