import React from "react"
import { render } from "../../utils/testUtils"
import { SSG } from "./index.page"

describe("SSG page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SSG data={42} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
