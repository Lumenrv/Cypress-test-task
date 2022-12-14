import SignUpPage from "../../../Pages/SignUpPage";

require("cypress-xpath");
describe("SignUp page test", () => {
  const signUpPage = new SignUpPage();
  const signUpPortal = "https://telnyx.com/sign-up";
  const invalidEmail = "123kjkfdsk@";
  const acceptCoockiesBtn = '//*[contains(text(),"Accept")]';
  beforeEach(() => {
    cy.visit(signUpPortal);
  });

  it("Test sign Up with valid credentials with captcha", () => {
    cy.wait(2000);
    cy.xpath(acceptCoockiesBtn).click();
    cy.wait(1000);
    signUpPage.emailInput().type(signUpPage.randomEmailGenerator());
    signUpPage.passwordInput().type(signUpPage.randomPasswordGenerator(12));
    signUpPage.nameInput().type(signUpPage.randomNameGenerator());
    signUpPage.checkBox().click();
    signUpPage.createAccountBtn().click();
    cy.wait(2000);
    signUpPage.errorMessage().contains("reCAPTCHA validation required");
  });

  it("Test sign Up with incorrect email", () => {
    cy.wait(1000);
    signUpPage.emailInput().type(invalidEmail);
    signUpPage.nameInput().click();
    signUpPage
      .emeailErrorMessage()
      .contains("Please enter a valid email address");
  });
});
