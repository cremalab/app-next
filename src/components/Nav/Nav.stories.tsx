import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Nav } from "."

export default {
  title: "Components/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>

const Template: Story<ComponentProps<typeof Nav>> = (args) => <Nav {...args} />

export const Example = Template.bind({})
Example.args = {}
