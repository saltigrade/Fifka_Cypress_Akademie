import { faker } from "@faker-js/faker";

describe("Simple cypress test with faker", () => {
  it("Fill registration with faker", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.exampleEmail();
    const telephone = faker.phone.number();
    const password = "NeumimPouzitFaker";
    const confirm = "NeumimPouzitFaker";
    cy.log("FirstName: " + firstName);
    cy.log("LastName: " + lastName);
    cy.log("Email: " + email);
    cy.log("Telephone: " + telephone);
    cy.log("Password: " + password);
    cy.log("Confirm password: " + confirm);
    cy.visit("http://tredgate.com/eshop/index.php?route=account/register");
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(confirm);
    cy.get(".pull-right > .btn").click();
  });
});

/* selector checkbox
cy.get('input[name="agree"]').check(["1"]); */
