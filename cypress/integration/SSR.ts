describe("SSR", () => {
  it("Renders correctly", () => {
    cy.visit("/ssr")

    cy.findByText("Server Side Rendering").should("exist")

    cy.findByText("Learn More About SSR").should("exist")
    cy.findByText("Learn More About SSR").should(
      "have.attr",
      "href",
      "https://nextjs.org/docs/basic-features/pages#server-side-rendering",
    )
  })
})
