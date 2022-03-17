import * as React from 'react'
import {
  StyledAlert,
  StyledAlertButton,
  StyledAlertContent,
  StyledAlertIcon,
} from './Alert.styles'
import { CheckCircle2, Info, AlertTriangle, AlertCircle, X } from 'lucide-react'
import { AlertProps } from './Alert.types'

const AlertIconSeverity = {
  success: <CheckCircle2 />,
  info: <Info />,
  warning: <AlertTriangle />,
  error: <AlertCircle />,
}

const AlertButtonColor = {
  success: 'success',
  info: 'primary',
  warning: 'warning',
  error: 'error',
}

const Alert: React.FC<AlertProps> = ({
  severity = 'success',
  children,
  onClose,
  icon,
  ...rest
}) => {
  return (
    <StyledAlert severity={severity} {...rest}>
      {icon === undefined && (
        <StyledAlertIcon component={AlertIconSeverity[severity]} />
      )}
      {icon && <StyledAlertIcon component={icon} />}
      <StyledAlertContent>{children}</StyledAlertContent>
      {onClose && (
        <StyledAlertButton
          variant={'icon'}
          leftIcon={<X />}
          disableRing={true}
          color={AlertButtonColor[severity]}
          onClick={onClose}
        />
      )}
    </StyledAlert>
  )
}

export default Alert
