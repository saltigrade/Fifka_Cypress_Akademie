// TOTO HLAVNÍ TEST PRO DDT
import userRolesData from "../../fixtures/user_roles_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { NewUserWindowPage } from "../../page-objects/pmtool/new_user_window_page";
import { UsersPage } from "../../page-objects/pmtool/users_page";
describe("Data Driven Tests for creating users with roles", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UsersPage().visit().clickAddUserButton();
    //.clickUsers() - to bych normálně dala, ale jdu přes Visit z BasePage
  });
  userRolesData.forEach((userData) => {
    it(`Create user with role: ${userData.role} and login test`, () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const username =
        userData.username_prefix + faker.number.int({ max: 99999 });
      const email = faker.internet.exampleEmail();
      new NewUserWindowPage()
        .typeUsername(username)
        .typeEmail(email)
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typePassword(userData.password)
        .selectAccessGroup(userData.role)
        .clickSave()
        .clickProfile()
        .clickLogout()
        .typeUsername(username)
        .typePassword(userData.password)
        .clickLogin()
        .userNameHasFullName(`${firstName} ${lastName}`);
    });
  });
});
