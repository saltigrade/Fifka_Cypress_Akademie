import { TasksPage } from "./tasks_page";

export class CreateTaskModal {
  constructor() {
    this.typeSelect = 'div[data-testid="Type"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.saveButton = ".btn.btn-primary-modal-action";
  }

  selectType(type) {
    cy.get(this.typeSelect).select(type);
    return this;
  }

  typeName(taskName) {
    cy.get(this.nameInput).type(taskName);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }
  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }
}
