describe("SSG", () => {
  it("Renders correctly", () => {
    cy.visit("/ssg")

    cy.findByText("Static Site Generation").should("exist")

    cy.findByText("Learn More About SSG").should("exist")
    cy.findByText("Learn More About SSG").should(
      "have.attr",
      "href",
      "https://nextjs.org/docs/basic-features/pages#static-generation-recommended",
    )
  })
})
