import * as React from 'react'
import { Select as MUISelect, SelectProps } from '@mui/material'

const Select = ({ MenuProps, ...props }: SelectProps) => {
  return (
    <MUISelect
      MenuProps={
        MenuProps
          ? MenuProps
          : {
              sx: { maxHeight: '19.25rem' },
            }
      }
      {...props}
    />
  )
}

export default Select
