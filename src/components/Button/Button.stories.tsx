import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      description: 'The type of button',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['primary', 'success', 'error', 'warning'],
      },
    },
    fullWidth: {
      description: 'Is the button go full width',
      type: 'boolean',
    },
    disabled: {
      description: 'Is the button disabled',
      type: 'boolean',
    },
    disableRing: {
      description: 'Disable the button ring',
      type: 'boolean',
    },
    children: {
      description: 'The button content',
      defaultValue: 'Button',
      type: { name: 'text', required: true },
    },
  },
}

const Template: Story = (props) => <Button {...props} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary button',
  color: 'primary',
  fullWidth: false,
  disabled: false,
}
