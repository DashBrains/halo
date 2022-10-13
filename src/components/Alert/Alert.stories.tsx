import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Alert from './Alert'
import Button from '../Button/Button'

export default {
  title: 'Alert',
  component: Alert,
}

const Template: Story = (props) => <Alert {...props} />

export const Success = Template.bind(
  {},
  {
    children: 'This is a success alert',
    onClose: () => {
      console.log('called')
    },
  }
)

export const Error = Template.bind(
  {},
  {
    severity: 'error',
    children: 'This is a error alert',
    action: <Button color={'inherit'}>Close</Button>,
  }
)

export const Warning = Template.bind(
  {},
  {
    severity: 'warning',
    children: 'This is a warning alert',
  }
)

export const Info = Template.bind(
  {},
  {
    severity: 'info',
    children: 'This is a info alert',
  }
)
