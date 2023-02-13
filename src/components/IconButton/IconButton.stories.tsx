import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import IconButton from './IconButton'
import Icon from '../Icon/Icon'
import { IconTrash } from '@tabler/icons-react'

export default {
  title: 'Icon Button',
  component: IconButton,
}

const Template: Story = (props) => <IconButton {...props} />

export const Primary = Template.bind(
  {},
  {
    color: 'primary',
    children: <Icon icon={IconTrash} />,
  }
)

export const Success = Template.bind(
  {},
  {
    color: 'success',
    children: <Icon icon={IconTrash} />,
  }
)

export const Error = Template.bind(
  {},
  {
    color: 'error',
    children: <Icon icon={IconTrash} />,
  }
)

export const Warning = Template.bind(
  {},
  {
    color: 'warning',
    children: <Icon icon={IconTrash} />,
  }
)

export const Info = Template.bind(
  {},
  {
    color: 'info',
    children: <Icon icon={IconTrash} />,
  }
)
