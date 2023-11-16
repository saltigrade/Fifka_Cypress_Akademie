import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";
import { ProjectPage } from "../../page-objects/pmtool/project_page";

describe("Self exercise E2E PMTool - create new project and task", () => {
  beforeEach(() => {
    let username = Cypress.env("pmtool_username");
    let password = Cypress.env("pmtool_password");
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .openProjects();
  });
  it("Create project and task", () => {
    const todayDate = "2023-11-14";
    const randomInt = faker.number.int({ max: 9999 });
    const projectName = `PARIKOVA_self-exercise_${randomInt}`;
    cy.fixture("test.txt", { encoding: null }).as("uploadFile");
    const taskName = "FIFKA_TASK_" + faker.number.int({ max: 9999 });

    new ProjectPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .typeStartDate(todayDate)
      .insertFileToUpload()
      .clickSave()
      .clickAddTask()
      .selectType("Change")
      .selectStatus("Open")
      .typeName(taskName)
      .clickSave()
      .clickProjectInfo();
  });
});
