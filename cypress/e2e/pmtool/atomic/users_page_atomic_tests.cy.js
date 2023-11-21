import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Users page atomic tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    //využíváme basepage visit pro přímé otevření
    new UsersPage().visit();
  });
  context("Title tests", () => {
    it("Title is visible", () => {
      new UsersPage().pageTitleIsVisible();
    });
    it("Title has Text", () => {
      new UsersPage().pageTitleHasText("Users");
    });
  });
  context("Add user button tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addUserButtonIsVisible();
    });
    it("Add user button have Text", () => {
      new UsersPage().addUserButtonHasText("Add User");
    });
  });
});
