import * as React from 'react'
import { StyledAlertTitle } from './AlertTitle.styles'

const AlertTitle: React.FC<React.ComponentPropsWithoutRef<'span'>> = (
  props
) => {
  return <StyledAlertTitle {...props} />
}

export default AlertTitle
