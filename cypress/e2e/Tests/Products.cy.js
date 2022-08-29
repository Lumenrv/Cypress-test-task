const productPage = "https://telnyx.com/products";
const productsList = "h2";

describe("Products page test", () => {
  it("Test if all 30 products are displayed on the product page", () => {
    cy.visit(productPage);
    cy.get(productsList).its("length").should("eq", 30);
  });
});
