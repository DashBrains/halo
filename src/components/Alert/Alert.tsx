import React from 'react'
import { Alert as MUIAlert, AlertProps, styled } from '@mui/material'
import Icon from '../Icon/Icon'
import IconButton from '../IconButton/IconButton'

const AlertBase = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ iconMapping, onClose, action, ...rest }, ref) => {
    const customIconMapping = {
      success: <Icon icon={'CheckCircle'} fontSize="inherit" />,
      error: <Icon icon={'AlertCircle'} fontSize="inherit" />,
      warning: <Icon icon={'AlertTriangle'} fontSize="inherit" />,
      info: <Icon icon={'Info'} fontSize="inherit" />,
    }

    const onCloseButton = (
      <IconButton size={'small'} color={'inherit'} onClick={onClose}>
        <Icon icon={'X'} fontSize={'inherit'} color={'inherit'} />
      </IconButton>
    )

    return (
      <MUIAlert
        iconMapping={iconMapping ? iconMapping : customIconMapping}
        action={onClose ? onCloseButton : action}
        ref={ref}
        {...rest}
      />
    )
  }
)

const AlertStyled = styled(AlertBase)((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'

  return {
    backdropFilter: 'saturate(180%) blur(20px)',
    boxShadow: `0 0px 6px 1px rgba(${shadowColor}, 0.1), 0 2px 4px 1px rgba(${shadowColor}, 0.06)`,
  }
})

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <AlertStyled {...props} ref={ref} />
))

export default Alert
