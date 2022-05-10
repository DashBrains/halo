import { styled, Button as MUIButton } from '@mui/material'
import shadeColor from '../../utils/shadeColor'
import { CommonStyledProps } from '../../utils/common'

export interface ButtonProps {
  disableRing?: boolean
}

const Button = styled(MUIButton)<CommonStyledProps & ButtonProps>((props) => {
  const color =
    props.color && props.color !== 'inherit' ? props.color : 'primary'
  const bgColor = props.sx?.backgroundColor
    ? props.sx?.backgroundColor
    : props.theme.palette[color].main
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'
  const isDark = props.theme.palette.mode && props.theme.palette.mode === 'dark'

  const baseStyle = {
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: `rgba(${shadowColor}, 0.04)`,
    },
    '&:active': {
      backgroundColor: `rgba(${shadowColor}, 0.08)`,
    },
    '&:focus': {},
  }

  if (props.color !== 'inherit' && props.variant === 'contained') {
    if (!props.disableRing) {
      baseStyle['&:focus'] = {
        boxShadow: `${props.theme.palette.background.default} 0px 0px 0px 2px, ${bgColor} 0px 0px 0px 4px`,
      }
    }
    baseStyle['&:hover'] = {
      backgroundColor: shadeColor(bgColor, isDark ? 10 : -10),
    }
    baseStyle['&:active'] = {
      backgroundColor: shadeColor(bgColor, isDark ? 20 : -20),
    }
  }

  return baseStyle
})

export default Button
