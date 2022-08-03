import * as React from 'react'
import { Dialog, DialogContentText } from '@mui/material'
import { Story } from '@storybook/react/types-6-0'
import Button from '../Button'
import { DialogActions, DialogContent, DialogTitle } from './Dialog'

export default {
  title: 'Dialog',
  component: Dialog,
}

const Template: Story = (props) => <Dialog open={true} {...props} />

export const Default = Template.bind(
  {},
  {
    children: (
      <>
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color={'error'} variant={'contained'}>
            Disagree
          </Button>
          <Button autoFocus variant={'contained'}>
            Agree
          </Button>
        </DialogActions>
      </>
    ),
  }
)
