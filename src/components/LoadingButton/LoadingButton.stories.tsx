import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import LoadingButton from './LoadingButton'
import Icon from '../Icon/Icon'

export default {
  title: 'Loading Button',
  component: LoadingButton,
}

const Template: Story = (props) => <LoadingButton {...props} />

export const Contained = Template.bind(
  {},
  {
    children: 'Contained',
    loading: true,
    variant: 'contained',
  }
)

export const Outlined = Template.bind(
  {},
  {
    children: 'Outlined',
    loading: true,
    loadingPosition: 'start',
    startIcon: <Icon icon={'Save'} />,
    variant: 'outlined',
  }
)

export const Text = Template.bind(
  {},
  {
    children: 'Text',
    loading: true,
    loadingIndicator: 'Loading...',
    variant: 'text',
  }
)
