import { LoginPage, TegBLoginPage } from "../../page-objects/tegb/login_page";

describe("TEGB login tests", () => {
  it("Login to TEGB", () => {
    new TegBLoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
