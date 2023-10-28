import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login to pmtool using selectors", () => {
  it("My selectors in pmtool", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickLogin()
      .clickProjects()
      .clickAddProject()
      .typeName("Sabina")
      .clickSave()
      .clickProfileSec()
      .clickLogout();
  });
});
