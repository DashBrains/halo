import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template: Story = (props) => <Button {...props} />

export const Primary = Template.bind(
  {},
  {
    children: 'Primary button',
    color: 'primary',
    variant: 'contained',
  }
)

export const Success = Template.bind(
  {},
  {
    children: 'Success button',
    color: 'success',
    variant: 'contained',
  }
)

export const Error = Template.bind(
  {},
  {
    children: 'Error button',
    color: 'error',
    variant: 'contained',
  }
)

export const Warning = Template.bind(
  {},
  {
    children: 'Warning button',
    color: 'warning',
    variant: 'contained',
  }
)

export const Info = Template.bind(
  {},
  {
    children: 'Info button',
    color: 'info',
    variant: 'contained',
  }
)
