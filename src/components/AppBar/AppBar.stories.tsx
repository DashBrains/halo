import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import AppBar from './AppBar'
import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Button from '../Button'

export default {
  title: 'App Bar',
  component: AppBar,
}

const Template: Story = (props) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar {...props} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </>
  ),
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: (
    <>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </>
  ),
}
