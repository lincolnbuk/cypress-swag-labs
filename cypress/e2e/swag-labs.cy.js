describe("Swag Labs Functional Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should allow adding items to the cart", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("should allow adding multiple products to the cart", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();

    // Clica em cada botão "Add to cart" um por vez, aguardando o DOM atualizar
    cy.get(".btn_inventory").then(($btns) => {
      for (const btn of $btns) {
        cy.wrap(btn).click();
      }
    });

    cy.get(".shopping_cart_badge").should("contain", "6"); // Supondo que existam 6 produtos
  });

  it("should allow reviewing items in the cart before checkout", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 1);
  });

  it("should allow adjusting the quantity of items in the cart", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_quantity").should("contain", "1");
    cy.get(".btn_secondary").first().click(); // Corrigido para clicar apenas no primeiro botão
    cy.get(".cart_item").should("not.exist");
  });

  it("should display products clearly on the home page", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();
    cy.get(".inventory_item").each(($el) => {
      cy.wrap($el).find(".inventory_item_name").should("be.visible");
      cy.wrap($el).find(".inventory_item_desc").should("be.visible");
      cy.wrap($el).find(".inventory_item_price").should("be.visible");
      cy.wrap($el).find("img").should("be.visible");
    });
  });

  it("should display all products on the home page", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();
    cy.get(".inventory_item").should("have.length", 6); // Assuming there are 6 products
  });

  it("should allow login with valid credentials", () => {
    cy.get('input[id="user-name"]').type("standard_user");
    cy.get('input[id="password"]').type("secret_sauce");
    cy.get('input[id="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });
});
