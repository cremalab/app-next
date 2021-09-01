import { RenderOptions, render } from "@testing-library/react"
import { ReactElement, ReactNode } from "react"

const Providers = ({ children }: { children?: ReactNode }) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
// eslint-disable-next-line import/export
export * from "@testing-library/react"

// override render method
// eslint-disable-next-line import/export
export { customRender as render }
