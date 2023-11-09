import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectPage } from "../../page-objects/pmtool/project_page";

describe("Self exercise PMTool - create new project and task", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickLogin();
  });
  it("Create project and task", () => {
    new ProjectPage().openProjects().clickAddProject();
  });
});
