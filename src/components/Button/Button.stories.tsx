import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Button from './Button'
import { Lock } from 'lucide-react'

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
    onClick: { action: 'clicked' },
  },
}

const Template: Story = (props) => <Button {...props} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary button',
  color: 'primary',
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success button',
  color: 'success',
}

export const Error = Template.bind({})
Error.args = {
  children: 'Error button',
  color: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning button',
  color: 'warning',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled button',
  color: 'primary',
  disabled: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: 'Full width button',
  color: 'primary',
  fullWidth: true,
}

export const DisabledRing = Template.bind({})
DisabledRing.args = {
  children: 'Disabled ring button',
  color: 'primary',
  disableRing: true,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  children: 'Left icon button',
  color: 'primary',
  leftIcon: <Lock />,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  children: 'Right icon button',
  color: 'primary',
  rightIcon: <Lock />,
}
