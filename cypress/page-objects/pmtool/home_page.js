import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.profileSection = "#user_dropdown > a > i";
    this.logoutButton = "#logout";
  }
  clickProfileSec() {
    cy.get(this.profileSection).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
