import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Alert from './Alert'
import AlertTitle from './AlertTitle'

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    severity: {
      description: 'The severity of the alert',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['success', 'info', 'error', 'warning'],
      },
    },
    children: {
      description: 'The alert content',
      defaultValue: 'Alert',
      type: { name: 'text', required: true },
    },
    onClose: { action: 'clicked' },
  },
}

const Template: Story = (props) => <Alert {...props} />

export const Success = Template.bind({})
Success.args = {
  severity: 'success',
  children: 'This is a success alert',
}

export const Info = Template.bind({})
Info.args = {
  severity: 'info',
  children: 'This is an info alert',
}

export const Warning = Template.bind({})
Warning.args = {
  severity: 'warning',
  children: 'This is a warning alert',
}

export const Error = Template.bind({})
Error.args = {
  severity: 'error',
  children: 'This is an error alert',
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  severity: 'success',
  children: 'This is a no icon alert',
  icon: false,
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  severity: 'success',
  children: (
    <>
      <AlertTitle>Success</AlertTitle>
      This is a success alert
    </>
  ),
}

export const WithoutCloseButton = Template.bind({})
WithoutCloseButton.args = {
  severity: 'success',
  children: 'This is a success alert',
  onClose: null,
}
