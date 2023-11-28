import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectPage } from "../../page-objects/pmtool/project_page";

describe("Projects Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectPage().visit();
  });

  context("Filters Table Tests", () => {
    it("Filters section is visible", () => {
      new ProjectPage().filtersTableBody.isVisible();
    });

    it("Hide filters section, it is not visible", () => {
      new ProjectPage().clickFiltersHeader().filtersTableBody.isNotVisible();
      new ProjectPage().clickFiltersHeader();
    });

    it("Filters title is visible", () => {
      new ProjectPage().filtersTableHeader.isVisible();
    });

    it("Filters title has text", () => {
      new ProjectPage().filtersTableHeader.containsText("Applied Filters");
    });
    it("Dropdown menu is visible", () => {
      new ProjectPage().filtersDropdownMenu.isVisible();
    });
    it("Contestx menu os opened after dropdown menu click", () => {
      new ProjectPage().clickDropdownMenu().openedContextMenu.isVisible();
    });
    it("Add filter menu button is visible", () => {
      new ProjectPage().addFilterMenu.isVisible();
    });

    it("Context menu is opened after add filter button click", () => {
      new ProjectPage().clickAddFilterMenu().addFilterMenu.isVisible();
    });
  });
  context("Project action elements tests", () => {
    it("Add Project button is visible", () => {
      new ProjectPage().addProject.isVisible();
    });

    it("With Selected button is visible", () => {
      new ProjectPage().withSelectedButton.isVisible();
    });

    it("Upload button is visible", () => {
      new ProjectPage().uploadAnchor.isVisible();
    });

    it("Search input is visible", () => {
      new ProjectPage().searchInput.isVisible();
    });

    it("Search button is visible", () => {
      new ProjectPage().searchButton.isVisible();
    });

    it("Add Project button has text", () => {
      new ProjectPage().addProject.hasText("Add Project");
    });

    it("With Selected has text", () => {
      new ProjectPage().withSelectedButton.containsText("With Selected");
    });

    it("Search input has Placeholder", () => {
      new ProjectPage().searchInput.hasAttribute("placeholder", "Search");
    });
  });
});
