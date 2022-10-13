import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { CardActions, Card, CardContent } from './Card'
import { Typography } from '@mui/material'
import Button from '../Button'

export default {
  title: 'Card',
  component: Card,
}

const Template: Story = (props) => <Card {...props} />

export const Basic = Template.bind(
  {},
  {
    sx: { minWidth: 275 },
    children: (
      <>
        <CardContent sx={{ padding: '1rem' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: '1rem' }}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </>
    ),
  }
)

export const Raised = Template.bind(
  {},
  {
    sx: { minWidth: 275 },
    raised: true,
    children: (
      <>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the DayA
          </Typography>
          <Typography variant="h5" component="div">
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </>
    ),
  }
)
