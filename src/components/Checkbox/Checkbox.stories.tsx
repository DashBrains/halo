import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

const Template: Story = (props) => <Checkbox {...props} />

export const Basic = Template.bind({})
Basic.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'small',
}

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  disabled: true,
  checked: true,
}
