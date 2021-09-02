import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Welcome } from "."

export default {
  title: "Components/Welcome",
  component: Welcome,
} as ComponentMeta<typeof Welcome>

const Template: Story<ComponentProps<typeof Welcome>> = (args) => (
  <Welcome {...args} />
)

export const Example = Template.bind({})
Example.args = {}
