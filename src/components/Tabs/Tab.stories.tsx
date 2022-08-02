import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Tab from './Tabs'
import { Box, Tabs } from '@mui/material'

export default {
  title: 'Tabs',
  component: Tab,
}

const Template: Story = (props) => (
  <>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs aria-label="basic tabs example" value={0} {...props}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
    <Box>Item One</Box>
  </>
)

export const Basic = Template.bind({})

export const Colored = Template.bind(
  {},
  {
    textColor: 'secondary',
    indicatorColor: 'secondary',
  }
)

export const Centered = Template.bind(
  {},
  {
    centered: true,
  }
)
