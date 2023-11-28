describe("Multi Domain test", () => {
  it("cy.origin test", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#contact-us").should("be.visible");
    cy.origin("https://tredgate.cz", () => {
      cy.visit("/");
      cy.get("a[href='https://tredgatecz.wordpress.com']").should("be.visible");
    });
  });
});
