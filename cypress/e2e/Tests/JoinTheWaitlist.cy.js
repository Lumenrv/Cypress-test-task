require("cypress-xpath");
import JoinTheWaitlistPage from "../../../Pages/JoinTheWaitlistPage";
const mainPage = "https://telnyx.com/";
const acceptCoockiesBtn = '[class="sc-5d3a275a-0 jdjrgE"]';
describe("WaitList test", () => {
  const joinTheWaitlistPage = new JoinTheWaitlistPage();
  it("Test the “Join the waitlist” button", () => {
    cy.visit(mainPage);
    cy.wait(2000);
    cy.get(acceptCoockiesBtn).first().click();
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
