import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Icon from './Icon'
import { IconAlarm, IconClock } from '@tabler/icons-react'

export default {
  title: 'Icon',
  component: Icon,
}

const Template: Story = (props) => <Icon icon={IconAlarm} {...props} />

export const Primary = Template.bind(
  {},
  {
    icon: IconClock,
    color: 'primary',
  }
)

export const Secondary = Template.bind(
  {},
  {
    icon: IconAlarm,
    color: 'secondary',
  }
)
