import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe(" Login Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username has Placeholder", () => {
      new LoginPage().usernamePlaceholder("Username");
    });
    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });
    it("Username has value after type", () => {
      const usernameValue = "Test123";
      new LoginPage()
        .typeUsername(usernameValue)
        .usernameHasValue(usernameValue);
    });
  });
  context("Password input tests", () => {
    it("Password has placeholder", () => {
      new LoginPage().passwordPlaceholder("Password");
    });
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });
    it("Password has value after type", () => {
      const passwordValue = "123456";
      new LoginPage()
        .typePassword(passwordValue)
        .passwordHasValue(passwordValue);
    });
  });
  context("Logo tests", () => {
    it("Logo is visible", () => {
      new LoginPage().logoIsVisible();
    });
  });
  context("Remember checkbox test", () => {
    it("Remember has text", () => {
      const rememberText = " Remember Me";
      new LoginPage().rememberMeHasText(rememberText);
    });
  });
  context("Ztracené heslo", () => {
    it("Ztracené heslo has text", () => {
      const forgottenPasswordText = "Password forgotten?";
      new LoginPage().passwordForgottenHasText(forgottenPasswordText);
    });
  });
  context("Page Header tests", () => {
    it("Page heade is visible", () => {
      new LoginPage().pageHeaderIsVisible;
    });
    it("Page header has text", () => {
      new LoginPage().pageHeaderHasText("Login");
    });
  });
});
