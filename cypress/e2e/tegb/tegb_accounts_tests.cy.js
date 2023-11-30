import { DashboardPage } from "../../page-objects/tegb/dashboard_page";
import { TegBLoginPage } from "../../page-objects/tegb/login_page";

describe("Teg#B Accounts tests", () => {
  beforeEach(() => {
    new TegBLoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .waitForLoginApi();
  });

  it("Accounts Title has text", () => {
    new DashboardPage()
      .clickAccounts()
      .waitForAccountsApi()
      .titleHasText("Account");
  });
});
