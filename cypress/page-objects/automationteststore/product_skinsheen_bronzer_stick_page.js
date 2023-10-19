import { HomePage } from "../../page-objects/automationteststore/home_page";

describe("Automation Store products tests", () => {
  it("Add skinsheedn bronzer to basket", () => {
    new HomePage().openStore().clickSkinsheenBronzerStickName();
  });
});
