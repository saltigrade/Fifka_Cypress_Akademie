import { LoginPage } from "./login_page";
import { ProjectInfo } from "./project_info";

export class HomePage {
  constructor() {
    this.profileSection = "li#user_dropdown";
    this.logoutButton = "#logout";
    this.projectsButton = "li#Projects";
    this.addProject = "button[test_id = 'Add Project']";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  // mnou vytvořené selektory: profileSection, projectsButton a addProject

  clickProjects() {
    cy.get(this.projectsButton).click();
    return this;
  }
  clickAddProject() {
    cy.get(this.addProject).click();
    return new ProjectInfo();
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
