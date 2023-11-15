import { ProductSkinsheenBronzerStickPage } from "./product_skinsheen_bronzer_stick_page";

export class HomePage {
  constructor() {
    this.storeUrl = "https://automationteststore.com/";
    this.loginRegisterButton = "#customer_menu_top";
    this.continueButton = 'button[title = "Continue"]';
    // this.welcomeText = "div[class = 'welcome_msg'] h4";
    // cy.get(this.welcomeText).should("be.visible");
    // this.skinsheenBronzerStickNameButton =
    //   "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname";
  }

  openStore() {
    cy.visit(this.storeUrl);
    return this;
  }

  clickLoginRegisterButton() {
    cy.get(this.loginRegisterButton).click();
    return this;
  }
  clickContinueButton() {
    cy.get(this.continueButton).click();
    // TODO: dodělat return statement jakmile bude hotový page-object return new CreateAccount();
  }

  // clickSkinsheenBronzerStickName() {
  //   cy.get(this.skinsheenBronzerStickNameButton).click();
  //   return new ProductSkinsheenBronzerStickPage();
  // }
}
