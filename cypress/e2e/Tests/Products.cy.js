describe("Products page test", () => {
  it("Test if all 30 products are displayed on the product page", () => {
    cy.visit("https://telnyx.com/products");
    cy.get("h2").its("length").should("eq", 30);
  });
});
