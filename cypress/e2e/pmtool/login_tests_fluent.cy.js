import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login to pmtool using Fluent API test", () => {
    let username = Cypress.env("pmtool_username");
    let password = Cypress.env("pmtool_password");
    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});

// import { LoginPage } from "../../page-objects/pmtool/login_page";

// describe("Fluent Login tests", () => {
//   beforeEach(() => {
//     new LoginPage().openPmtool();
//   });
//   it("Login to pmtool using Fluent API test", () => {
//     new LoginPage()
//       .typeUsername(Cypress.env("pmtool_username"))
//       .typePassword(Cypress.env("pmtool_password"))
//       .clickLogin()
//       .clickProfile()
//       .clickLogoff();
//   });

//   it("Open and close forgotten password page", () => {
//     new LoginPage().clickPass
// it("Open and close forgotten password page", () => {
//     new LoginPage().clickPasswordForgotten().clickBack();
//   });
// });
