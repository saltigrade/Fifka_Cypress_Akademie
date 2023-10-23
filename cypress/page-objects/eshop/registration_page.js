export class RegistrationPage {
  constructor() {
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.continueButton = ".pull-right > .btn";
  }
  typeFirstName(firstname) {
    cy.get(this.firstNameInput).type(firstname);
    return this;
  }
  typeLastName(lastname) {
    cy.get(this.lastNameInput).type(lastname);
    return this;
  }
  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }
  typeTelephone(telephone) {
    cy.get(this.telephoneInput).type(telephone);
    return this;
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  typePasswordConfirm(password) {
    cy.get(this.passwordConfirmInput).type(password);
    return this;
  }
  clickContinueButton() {
    cy.get(this.continueButton).click();
  }
}
