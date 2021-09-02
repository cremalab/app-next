import React from "react"
import { render } from "../../utils/testUtils"
import { SSR } from "./index.page"

describe("SSR page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SSR data={42} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
