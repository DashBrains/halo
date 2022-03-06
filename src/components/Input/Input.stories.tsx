import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Input from './Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
}

const Template: Story = (props) => <Input {...props} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  type: 'text',
  label: 'With Label',
}

export const Error = Template.bind({})
Error.args = {
  type: 'text',
  error: true,
}
