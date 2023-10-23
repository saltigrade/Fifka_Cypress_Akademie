import { RegistrationPage } from "./registration_page.js";

export class HomePage {
  constructor() {
    this.eshopUrl = "http://tredgate.com/eshop/";
    this.myAccount = ".list-inline > .dropdown > .dropdown-toggle";
    this.register = ".dropdown-menu > :nth-child(1) > a";
  }
  openEshop() {
    cy.visit(this.eshopUrl);
    return this;
  }
  clickMyAccount() {
    cy.get(this.myAccount).click();
    return this;
  }
  clickRegister() {
    cy.get(this.register).click();
    return new RegistrationPage();
  }
}
