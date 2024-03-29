import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

const Template: Story = (props) => <Checkbox {...props} />

export const Basic = Template.bind(
  {},
  {
    color: 'primary',
  }
)

export const Secondary = Template.bind(
  {},
  {
    color: 'secondary',
    size: 'small',
  }
)

export const Error = Template.bind(
  {},
  {
    color: 'error',
  }
)

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}

export const Disabled = Template.bind(
  {},
  {
    disabled: true,
  }
)
export const DisabledChecked = Template.bind(
  {},
  {
    disabled: true,
    checked: true,
  }
)
