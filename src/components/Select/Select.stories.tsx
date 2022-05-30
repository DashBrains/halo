import * as React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Select from './Select'
import { FormControl, InputLabel } from '@mui/material'
import MenuItem from '../MenuItem/MenuItem'

export default {
  title: 'Select',
  component: Select,
}

const Template: Story = (props) => (
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select {...props} />
  </FormControl>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Age',
  value: 10,
  children: [
    <MenuItem value={10}>Ten</MenuItem>,
    <MenuItem value={20}>Twenty</MenuItem>,
    <MenuItem value={30}>Thirty</MenuItem>,
    <MenuItem value={40}>Forty</MenuItem>,
    <MenuItem value={50}>Fifty</MenuItem>,
    <MenuItem value={60}>Sixty</MenuItem>,
    <MenuItem value={70}>Seventy</MenuItem>,
  ],
}
