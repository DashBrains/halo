import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import IconButton from './IconButton'
import Icon from '../Icon/Icon'

export default {
  title: 'Icon Button',
  component: IconButton,
}

const Template: Story = (props) => <IconButton {...props} />

export const Primary = Template.bind(
  {},
  {
    color: 'primary',
    children: <Icon icon={'Trash'} />,
  }
)

export const Success = Template.bind(
  {},
  {
    color: 'success',
    children: <Icon icon={'Trash'} />,
  }
)

export const Error = Template.bind(
  {},
  {
    color: 'error',
    children: <Icon icon={'Trash'} />,
  }
)

export const Warning = Template.bind(
  {},
  {
    color: 'warning',
    children: <Icon icon={'Trash'} />,
  }
)

export const Info = Template.bind(
  {},
  {
    color: 'info',
    children: <Icon icon={'Trash'} />,
  }
)
