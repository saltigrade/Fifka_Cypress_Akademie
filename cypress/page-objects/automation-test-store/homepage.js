export class AutomationTestStore {
  constructor() {
    this.testStoreUrl = "https://automationteststore.com/";
    this.linkProduct = "#";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }
}
