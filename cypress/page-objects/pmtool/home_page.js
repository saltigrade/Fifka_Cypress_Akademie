import { HeaderSection } from "./header_sections";
import { ProjectPage } from "./project_page";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/");

    // this.welcomePageHeader = ".header.navbar";
    // cy.get(this.welcomePageHeader).should("be.visible");
  }
}

// .header.navbar.navbar-inverse.navbar-fixed-top.noprint
