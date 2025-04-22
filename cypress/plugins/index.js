module.exports = (on, config) => {
  // You can implement node event listeners here.
  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.screenshot();
    }
  });
};
