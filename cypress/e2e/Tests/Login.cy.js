import LoginPage from "../../../Pages/LoginPage";
require("cypress-xpath");
describe("Login page test", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit("https://portal.telnyx.com/#/login/sign-in");
  });

  it("Test login with an invalid password", () => {
    loginPage.emailInput().type("sokesi7058@lurenwu.com");
    loginPage.passwordInput().type(loginPage.randomPasswordGenerator());
    loginPage.SubmitBtn().click();
    loginPage
      .errorMessage()
      .contains("That email and password combination is not valid");
  });

  it("Test login with an invalid email", () => {
    loginPage.emailInput().type(loginPage.randomEmailGenerator());
    loginPage.passwordInput().type("CyppressTestSt1234@");
    loginPage.SubmitBtn().click();
    loginPage
      .errorMessage()
      .contains("That email and password combination is not valid");
  });

  it("Test login with valid credentials for blocked account", () => {
    loginPage.emailInput().type("sokesi7058@lurenwu.com");
    loginPage.passwordInput().type("CyppressTestSt1234@");
    loginPage.SubmitBtn().click();
    loginPage.errorMessage().contains("Your account has been blocked.");
  });

  it("Test Signe Sign-On option with invalid credential", () => {
    loginPage.singleSignInBtn().click();
    loginPage.emailInputSignle().type("sokesi7058@lurenwu.com");
    loginPage.SubmitSignleBtn().click();
    loginPage
      .errorMessage()
      .contains("The requested resource or URL could not be found");
  });

  it("Test forgot password feature with non-registered email", () => {
    loginPage.forgotPasswordBtn().click();
    loginPage.emailInput().type(loginPage.randomEmailGenerator());
    loginPage.resetPasswordBtn().click();
    loginPage
      .successMessage()
      .contains("We have accepted your password reset request");
  });
});
