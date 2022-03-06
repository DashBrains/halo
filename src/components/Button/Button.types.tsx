import * as React from 'react'

export type ButtonColor = 'primary' | 'success' | 'error' | 'warning'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean
  color?: ButtonColor
  disableRing?: boolean
  leftIcon?: Node
  rightIcon?: Node
}
