import { faker } from "@faker-js/faker";
import { HomePage } from "../../page-objects/automationteststore/home_page";

describe("Automation test store - registration", () => {
  beforeEach(() => {
    new HomePage().openStore();
  });
  it("Login or register and create account", () => {
    const email = faker.internet.exampleEmail();
    let username = Cypress.env("automationteststore_username");
    let password = Cypress.env("automationteststore_password");
    new HomePage()
      .clickLoginRegisterButton()
      .clickContinueButton()
      .typeFirstName("Sabina")
      .typeLastName("Parik")
      .typeEmail(email)
      .typeTelephone("+420728759255")
      .typeFax("123456")
      .typeCompany("Microsoft")
      .typeAddress1("Pražská 1")
      .typeAddress2("Pražská 2")
      .typeCity("Praha")
      .selectCountry("Czech Republic")
      .selectRegionState("Vysocina")
      .typeZipCode("18100")
      .typeUsername(username)
      .typePassword(password)
      .typeConfirmPassword(password)
      .checkSubscribe()
      .checkPrivacyPolicy()
      .submitConfirmButton();
  });
});

// option[value = '901'] - tento selektor pro Vysocina nefunguje
