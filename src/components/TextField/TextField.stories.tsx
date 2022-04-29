import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import TextField from './TextField'

export default {
  title: 'Text field',
  component: TextField,
}

const Template: Story = (props) => <TextField {...props} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
}

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  label: 'Filled',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error',
  error: true,
}
