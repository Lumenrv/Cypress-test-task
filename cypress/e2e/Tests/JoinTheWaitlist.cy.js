require("cypress-xpath");
import JoinTheWaitlistPage from "../../../Pages/JoinTheWaitlistPage";
describe("WaitList test", () => {
  const joinTheWaitlistPage = new JoinTheWaitlistPage();
  it("Test the “Join the waitlist” button", () => {
    cy.visit("https://telnyx.com/");
    cy.wait(2000);
    cy.get('[class="sc-5d3a275a-0 jdjrgE"]').first().click();
    cy.wait(1000);
    joinTheWaitlistPage.JoinTheWaitlistBtn().click();
    cy.wait(1000);
    joinTheWaitlistPage.JoinTheWaitlistBtn2().click();
    cy.wait(3000);
    joinTheWaitlistPage
      .nameInput()
      .type(joinTheWaitlistPage.randomNameGenerator());
    joinTheWaitlistPage
      .lastNameInput()
      .type(joinTheWaitlistPage.randomNameGenerator());
    joinTheWaitlistPage
      .emailInput()
      .type(joinTheWaitlistPage.randomEmailGenerator());
    joinTheWaitlistPage
      .additionalInfoInput()
      .type("Hello every one, it's test message, thanks!");
    joinTheWaitlistPage.submitBtn().click();
    joinTheWaitlistPage.thankYouMessage().contains("Thanks for signing up!");
  });
});
