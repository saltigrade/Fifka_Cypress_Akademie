import { CreateProjectModal } from "./create_project_modal";
import { HeaderSection } from "./header_sections";
import { HomePage } from "./home_page";

export class ProjectPage extends HeaderSection {
  constructor() {
    super();
    this.addProject = "button[test_id = 'Add Project']";
    this.nameInput = "div[data-testid='Name']";
    this.saveButton = "button[type='submit']";
  }
  // zde mnou vytvořené selektory

  clickAddProject() {
    cy.get(this.addProject).click();
    return CreateProjectModal;
  }
  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }
  clickSave() {
    cy.get(this.saveButton).click();
    return this;
  }
}
