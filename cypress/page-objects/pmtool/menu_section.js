import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsButton = "li#Projects";
    this.dashboardLink = "#dashboard";
  }

  openDashboard() {
    const { HomePage } = require("./home_page");
    cy.get(this.dashboardLink).click();
    return new HomePage();
  }
  openProjects() {
    const { ProjectPage } = require("./project_page");
    cy.get(this.projectsButton).click();
    return new ProjectPage();
  }
}
