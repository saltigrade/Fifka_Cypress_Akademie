import { faker } from "@faker-js/faker";
import { HomePage } from "../../page-objects/automationteststore/home_page";

describe("Automation test store - registration", () => {
  beforeEach(() => {
    new HomePage().openStore();
  });
  it("Login or register and create account", () => {
    // const email = faker.internet.exampleEmail();
    // let username = Cypress.env("automationteststore_username");
    // let password = Cypress.env("automationteststore_password");
    new HomePage().clickLoginRegisterButton().clickContinueButton();
  });
});
