export class CreateAccount {
  constructor() {
    this.firstName = "#AccountFrm_firstname";
    this.lastName = "#AccountFrm_lastname";
    this.email = "#AccountFrm_email";
    this.telephone = "#AccountFrm_telephone";
    this.fax = "#AccountFrm_fax";
    this.company = "#AccountFrm_company";
    this.address1 = "#AccountFrm_address_1";
    this.address2 = "#AccountFrm_address_2";
    this.city = "#AccountFrm_city";
    this.regionState = "#AccountFrm_zone_id";
    this.zipCode = "#AccountFrm_postcode";
    this.country = "#AccountFrm_country_id";
    this.username = "#AccountFrm_loginname";
    this.password = "#AccountFrm_password";
    this.confirmPassword = "#AccountFrm_confirm";
    this.subscribe = 'input[(name = "newsletter")]';
    this.privacyPolicy = "#AccountFrm_agree";
    this.confirmButton = 'button[title = "Continue"]';
    // #AccountFrm
    // this.messageAccount =
  }
  typeFirstName(firstname) {
    cy.get(this.firstName).type(firstname);
    return this;
  }
  typeLastName(lastname) {
    cy.get(this.lastName).type(lastname);
    return this;
  }
  typeEmail(email) {
    cy.get(this.email).type(email);
    return this;
  }
  typeTelephone(telephone) {
    cy.get(this.telephone).type(telephone);
    return this;
  }
  typeFax(fax) {
    cy.get(this.fax).type(fax);
    return this;
  }
  typeCompany(company) {
    cy.get(this.company).type(company);
    return this;
  }
  typeAddress1(address1) {
    cy.get(this.address1).type(address1);
    return this;
  }
  typeAddress2(address2) {
    cy.get(this.address2).type(address2);
    return this;
  }
  typeCity(city) {
    cy.get(this.city).type(city);
    return this;
  }
  selectRegionState(regionState) {
    cy.get(this.regionState).select(regionState);
    return this;
  }
  typeZipCode(zipCode) {
    cy.get(this.zipCode).type(zipCode);
    return this;
  }
  selectCountry(country) {
    cy.get(this.country).select(country).wait(1000);
    return this;
  }
  typeUsername(username) {
    cy.get(this.username).type(username);
    return this;
  }
  typePassword(password) {
    cy.get(this.password).type(password);
    return this;
  }
  checkSubscribe() {
    cy.get(this.subscribe).check();
    return this;
  }
  checkPrivacyPolicy() {
    cy.get(this.privacyPolicy).check();
    return this;
  }
  submitConfirmButton() {
    cy.get(this.confirmButton).submit();
    return this;
  }
}
