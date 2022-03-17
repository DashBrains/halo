import * as React from 'react'

export type ButtonColor = 'primary' | 'success' | 'error' | 'warning'
export type ButtonVariant = 'normal' | 'text' | 'outlined' | 'icon'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean
  color?: ButtonColor
  disableRing?: boolean
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  variant?: ButtonVariant
}
