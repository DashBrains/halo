import * as React from 'react'

export type AlertSeverity = 'success' | 'error' | 'info' | 'warning'

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  severity?: AlertSeverity
  onClose?: React.MouseEvent<HTMLButtonElement>
  icon?: JSX.Element | boolean
}
