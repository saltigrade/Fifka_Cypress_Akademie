import { CreateProjectModal } from "./create_project_modal";
import { HeaderSection } from "./header_sections";
import { HomePage } from "./home_page";

export class ProjectPage extends HeaderSection {
  constructor() {
    super();
    this.addProject = "button[test_id = 'Add Project']";
    this.projectsTable = ".table-bordered";
    cy.get(this.projectsTable).should("be.visible");
    // this.nameInput = "div[data-testid='Name']";
    // this.saveButton = "button[type='submit']";
  }

  clickAddProject() {
    cy.get(this.addProject).click();
    return new CreateProjectModal();
  }
  // typeName(name) {
  //   cy.get(this.nameInput).type(name);
  //   return this;
  // }
  // clickSave() {
  //   cy.get(this.saveButton).click();
  //   return this;
  // }
}
