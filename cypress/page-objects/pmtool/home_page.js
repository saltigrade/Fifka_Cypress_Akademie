import { HeaderSection } from "./header_sections";
import { ProjectPage } from "./project_page";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");

    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
