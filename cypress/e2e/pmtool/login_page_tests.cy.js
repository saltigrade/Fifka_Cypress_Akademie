import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });
  it('Placeholder Password is "Password"', () => {
    new LoginPage().passwordPlaceholder("Password");
  });
  it('Username has "Username" as placeholder', () => {
    new LoginPage().usernamePlaceholder("Username");
  });
  it('Remember me checkbox has text "Remember Me"', () => {
    new LoginPage().rememberMeHasText("  Remember Me");
  });

  it('Password forgotten has text "Password forgotten?"', () => {
    new LoginPage().passwordForgottenHasText("Password forgotten?");
  });

  it("Logo is visible", () => {
    new LoginPage().logoIsVisible();
  });
  it("Alert not exist after opening PMTool", () => {
    new LoginPage().alertNotExist();
  });
});
