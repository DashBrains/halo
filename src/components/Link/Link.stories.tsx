import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Link from './Link'
import { Link as LinkIcon } from 'lucide-react'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    underline: {
      description: 'The underline behavior',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['always', 'hover', 'none'],
      },
    },
    color: {
      description: 'The link color',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['primary', 'inherit'],
      },
    },
    children: {
      description: 'The link content',
      defaultValue: 'Link',
      type: { name: 'text', required: true },
    },
  },
}

const Template: Story = (props) => <Link {...props} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default link',
  href: '#',
  underline: 'always',
  color: 'primary',
}

export const HoverUnderline = Template.bind({})
HoverUnderline.args = {
  children: 'Hover only underline',
  href: '#',
  underline: 'hover',
  color: 'primary',
}

export const NoUnderline = Template.bind({})
NoUnderline.args = {
  children: 'No underline',
  href: '#',
  underline: 'none',
  color: 'primary',
}

export const InheritColor = Template.bind({})
InheritColor.args = {
  children: 'Inherit color',
  href: '#',
  underline: 'always',
  color: 'inherit',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: <LinkIcon />,
  href: '#',
  underline: 'none',
  color: 'primary',
}
