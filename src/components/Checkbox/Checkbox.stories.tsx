import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      description: 'The checkbox label',
      defaultValue: 'Label',
      type: { name: 'text', required: false },
    },
  },
}

const Template: Story = (props) => <Checkbox {...props} />

export const Default = Template.bind({})
Default.args = {
  label: null,
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = {
  label: 'Disabled and checked',
  disabled: true,
  checked: true,
}
