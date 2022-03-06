export type ButtonColor = 'primary' | 'success' | 'error' | 'warning'

export interface ButtonProps {
  fullWidth: boolean
  color: ButtonColor
  disabled: boolean
  disableRing: boolean
}
