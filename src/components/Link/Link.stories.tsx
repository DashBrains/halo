import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Link from './Link'

export default {
  title: 'Link',
  component: Link,
}

const Template: Story = (props) => <Link {...props} />

export const Primary = Template.bind({})
Primary.args = {
  href: '#',
  children: 'Click me',
  color: 'secondary',
}
