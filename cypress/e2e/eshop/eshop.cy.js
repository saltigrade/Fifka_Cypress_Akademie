import { HomePage } from "../../page-objects/eshop/home_page.js";

describe("Eshop and registration form", () => {
  it("Open eshop", () => {
    new HomePage()
      .openEshop()
      .clickMyAccount()
      .clickRegister()
      .typeFirstName("Sabina")
      .typeLastName("Parikova")
      .typeEmail("sapa@example.com")
      .typeTelephone("+420728759255")
      .typePassword("bublina")
      .typePasswordConfirm("bublina")
      .clickContinueButton();
  });
});
