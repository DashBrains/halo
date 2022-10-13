import * as React from 'react'
import { Box, List, ListItemIcon, ListItemText } from '@mui/material'
import { Story } from '@storybook/react/types-6-0'
import Icon from '../Icon/Icon'
import { ListItem, ListItemButton } from './List'

export default {
  title: 'List',
  component: List,
}

const Template: Story = (props) => (
  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.default' }}>
    <List {...props} />
  </Box>
)

export const Basic = Template.bind(
  {},
  {
    children: (
      <>
        <ListItem>
          <ListItemButton selected>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </>
    ),
  }
)

export const WithIcon = Template.bind(
  {},
  {
    children: (
      <>
        <ListItem>
          <ListItemButton selected>
            <ListItemIcon>
              <Icon icon={'Inbox'} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Icon icon={'MailOpen'} />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </>
    ),
  }
)
