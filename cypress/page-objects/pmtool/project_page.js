import { CreateProjectModal } from "./create_project_modal";
import { HeaderSection } from "./header_sections";
import { HomePage } from "./home_page";

export class ProjectPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProject = "button[test_id = 'Add Project']";
    this.projectsTable = ".table-bordered";
    cy.get(this.projectsTable).should("be.visible");
    // this.nameInput = "div[data-testid='Name']";
  }

  clickAddProject() {
    cy.get(this.addProject).click();
    return new CreateProjectModal();
  }
  // typeName(name) {
  //   cy.get(this.nameInput).type(name);
  //   return this;
  // }
}
