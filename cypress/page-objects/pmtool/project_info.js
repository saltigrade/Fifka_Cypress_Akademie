import { HomePage } from "./home_page";

export class ProjectInfo {
  constructor() {
    this.nameInput = "div[data-testid='Name']";
    this.saveButton = "button[type='submit']";
  }
  // zde mnou vytvořené selektory

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }
  clickSave() {
    cy.get(this.saveButton).click();
    return new HomePage();
  }
}
