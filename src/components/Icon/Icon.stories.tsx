import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Icon from './Icon'

export default {
  title: 'Icon',
  component: Icon,
}

const Template: Story = (props) => <Icon icon={'AlarmClock'} {...props} />

export const Primary = Template.bind({})
Primary.args = {
  icon: 'Lock',
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  icon: 'AlarmClock',
  color: 'secondary',
}
