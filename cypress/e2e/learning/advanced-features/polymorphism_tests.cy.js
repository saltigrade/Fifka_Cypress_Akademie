import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickLogin();
  });
  it("Logout via polymorphism", () => {
    new HomePage().clickProfile().clickLogout();
  });
  it("Open Projects and logout", () => {
    new HomePage().openProjects().clickProfile().clickLogout();
  });
  it("Open Pages via Polymorphism Classes", () => {
    new HomePage().openProjects().openDashboard();
  });
});
