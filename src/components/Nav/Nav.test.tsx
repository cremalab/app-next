import React from "react"
import { render } from "../../utils/testUtils"
import { Nav } from "."

describe("Nav", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it("has the expected links", () => {
    const { getByText } = render(<Nav />, {})
    expect(getByText("Welcome")).toHaveAttribute("href", "/")
    expect(getByText("SSR")).toHaveAttribute("href", "/ssr")
    expect(getByText("SSG")).toHaveAttribute("href", "/ssg")
  })
})
