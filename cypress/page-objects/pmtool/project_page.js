import { CreateProjectModal } from "./create_project_modal";
import { HeaderSection } from "./header_sections";
import { HomePage } from "./home_page";
import { createCustomElement } from "../../helpers/custom_element";

export class ProjectPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProject = createCustomElement("button[test_id='Add Project']");
    this.projectsTable = createCustomElement(".table-bordered");
    this.filtersTableHeader = createCustomElement(
      'div[test_id="Filters"] .portlet-title'
    );
    this.filtersTableTitle = createCustomElement(
      'div[test_id="Filters"] .portlet-title .caption'
    );
    this.filtersTableBody = createCustomElement(
      'div[test_id="Filters"] .portlet-body'
    );
    this.filtersDropdownMenu = createCustomElement(
      'button[test-id="filters_dropdown_menu"]'
    );
    this.openedContextMenu = createCustomElement(
      'div[test_id="Filters"] .open .dropdown-menu'
    );
    this.addFilterMenu = createCustomElement('button[test_id="Add_filter"]');
    this.withSelectedButton = createCustomElement(
      'button[test_id="with_selected_dropdown"]'
    );
    this.uploadAnchor = createCustomElement('a[test_id="import_button"]');
    this.searchInput = createCustomElement('input[test_id="search_input"]');
    this.searchButton = createCustomElement('button[test_id="search_button"]');
  }

  clickAddProject() {
    this.projectsTable.isVisible();
    this.addProject.get().click();
    // cy.get(this.projectsTable).should("be.visible");
    // cy.get(this.addProject).click();
    return new CreateProjectModal();
  }

  clickFiltersHeader() {
    this.filtersTableHeader.get().click();
    return this;
  }
  clickDropdownMenu() {
    this.filtersDropdownMenu.get().click();
    return this;
  }
  clickAddFilterMenu() {
    this.addFilterMenu.get().click();
    return this;
  }
}
