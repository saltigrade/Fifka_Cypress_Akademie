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
    this.subscribe =
      "div[class='form-group'] label[class='col-sm-4 control-label']";
    this.subscribeNo = "#AccountFrm_newsletter0";
    this.subscribeYes = "#AccountFrm_newsletter1";
    this.privacyPolicy = "#AccountFrm_agree";
    this.confirmButton = "#AccountFrm";
    //  button[title = "Continue"]
    this.messageAccount = ".maintext";
    //.heading1 - také k message, buď sám selektor nebo i s class maintext
  }
  typeFirstName(firstname) {
    cy.get(this.firstName).type(firstname);
    cy.get(this.firstName).should("have.value", firstname);
    return this;
  }
  typeLastName(lastname) {
    cy.get(this.lastName).type(lastname);
    cy.get(this.lastName).should("have.value", lastname);
    return this;
  }
  typeEmail(email) {
    cy.get(this.email).type(email).should("have.value", email);
    return this;
  }
  typeTelephone(telephone) {
    cy.get(this.telephone).type(telephone);
    cy.get(this.telephone).should("have.value", telephone);
    return this;
  }
  typeFax(fax) {
    cy.get(this.fax).type(fax);
    cy.get(this.fax).should("have.value", fax);
    return this;
  }
  typeCompany(company) {
    cy.get(this.company).type(company);
    cy.get(this.company).should("have.value", company);
    return this;
  }
  typeAddress1(address1) {
    cy.get(this.address1).type(address1);
    cy.get(this.address1).should("have.value", address1);
    return this;
  }
  typeAddress2(address2) {
    cy.get(this.address2).type(address2);
    cy.get(this.address2).should("have.value", address2);
    return this;
  }
  typeCity(city) {
    cy.get(this.city).type(city);
    cy.get(this.city).should("have.value", city);
    return this;
  }
  selectRegionState(regionState) {
    cy.get(this.regionState).select(regionState).should("have.value", "901");
    return this;
  }
  typeZipCode(zipCode) {
    cy.get(this.zipCode).type(zipCode);
    cy.get(this.zipCode).should("have.value", zipCode);
    return this;
  }
  selectCountry(country) {
    cy.get(this.country).select(country).wait(1000).should("have.value", "56");
    return this;
  }
  typeUsername(username) {
    cy.get(this.username).type(username).should("have.value", username);
    return this;
  }
  typePassword(password) {
    cy.get(this.password).type(password).should("have.value", password);
    return this;
  }
  typeConfirmPassword(password) {
    cy.get(this.confirmPassword).type(password).should("have.value", password);
    return this;
  }
  checkSubscribe() {
    cy.get(this.subscribeNo).check("0");
    cy.get(this.subscribeNo).should("be.checked");
    cy.get(this.subscribeYes).should("not.be.checked");
    return this;
  }
  checkPrivacyPolicy() {
    cy.get(this.privacyPolicy).check("1");
    cy.get(this.privacyPolicy).should("be.checked");
    return this;
  }
  submitConfirmButton() {
    cy.get(this.confirmButton).submit();
    cy.get(this.messageAccount)
      .should("be.visible")
      .and("have.text", " Your Account Has Been Created!");
    return this;
  }
}
