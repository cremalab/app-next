import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Home } from "./index.page"

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>

const Template: Story<ComponentProps<typeof Home>> = (args) => (
  <Home {...args} />
)

export const Example = Template.bind({})
Example.args = {}
