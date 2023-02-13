import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import AppBar from './AppBar'
import { Box, Toolbar, Typography } from '@mui/material'
import Button from '../Button'
import IconButton from '../IconButton/IconButton'
import Icon from '../Icon/Icon'
import { IconMenu2 } from '@tabler/icons-react'

export default {
  title: 'App Bar',
  component: AppBar,
}

const Template: Story = (props) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar {...props} />
  </Box>
)

export const Primary = Template.bind(
  {},
  {
    raised: true,
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
            <Icon icon={IconMenu2} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </>
    ),
  }
)

export const Secondary = Template.bind(
  {},
  {
    color: 'secondary',
    raised: true,
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
            <Icon icon={IconMenu2} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </>
    ),
  }
)

export const Default = Template.bind(
  {},
  {
    color: 'inherit',
    raised: false,
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
            <Icon icon={IconMenu2} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="primary" variant="contained" disableRing>
            Login
          </Button>
        </Toolbar>
      </>
    ),
  }
)
