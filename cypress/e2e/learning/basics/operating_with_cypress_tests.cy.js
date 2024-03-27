describe("Operating with Cypress Test", () => {
  it("Login test", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("cy_podzim_2023");
    cy.get("#password").type("CypressPodzim");
    cy.get(".btn").click();
  });

  // ! BUG id: teg001
  it.skip("Test Failure - element not present", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username2");
  });
});
