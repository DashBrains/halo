import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Card from './Card'
import CardContent from './CardContent'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    shadow: {
      description: 'Enable shadow',
      type: 'boolean',
    },
  },
}

const Template: Story = (props) => <Card {...props} />

export const Default = Template.bind({})
Default.args = {
  children: <CardContent>Card Content</CardContent>,
  shadow: true,
}

export const WithoutShadow = Template.bind({})
WithoutShadow.args = {
  children: <CardContent>Card Content without shadow</CardContent>,
  shadow: false,
}

export const WithHeader = Template.bind({})
WithHeader.args = {
  children: (
    <>
      <CardHeader>Card header</CardHeader>
      <CardContent>Card Content</CardContent>
    </>
  ),
  shadow: true,
}

export const WithFooter = Template.bind({})
WithFooter.args = {
  children: (
    <>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </>
  ),
  shadow: true,
}

export const WithHeaderAndFooter = Template.bind({})
WithHeaderAndFooter.args = {
  children: (
    <>
      <CardHeader>Card header</CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </>
  ),
  shadow: true,
}
