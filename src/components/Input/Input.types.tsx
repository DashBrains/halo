import React from 'react'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean
  label?: string
}
