export class HomePage {
  constructor() {
    this.profileSection = "#user_dropdown > a > i";
    this.logoutButton = "#logout";
  }
  clickProfileSec() {
    cy.get(this.profileSection).click();
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
  }
}
