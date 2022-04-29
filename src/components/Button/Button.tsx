import { styled, Button as MUIButton } from '@mui/material'
import shadeColor from '../../utils/shadeColor'
import { CommonStyledProps } from '../../utils/common'

const Button = styled(MUIButton)<CommonStyledProps>((props) => {
  const color =
    props.color && props.color !== 'inherit' ? props.color : 'primary'
  const bgColor = props.sx?.backgroundColor
    ? props.sx?.backgroundColor
    : props.theme.palette[color].main

  const baseStyle = {
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0, 0.04)',
    },
    '&:active': {
      backgroundColor: 'rgba(0,0,0, 0.08)',
    },
    '&:focus': {},
  }

  if (props.color !== 'inherit' && props.variant === 'contained') {
    baseStyle['&:focus'] = {
      boxShadow: `${props.theme.palette.background.default} 0px 0px 0px 2px, ${bgColor} 0px 0px 0px 4px`,
    }
    baseStyle['&:hover'] = {
      backgroundColor: shadeColor(bgColor, -10),
    }
    baseStyle['&:active'] = {
      backgroundColor: shadeColor(bgColor, -20),
    }
  }

  return baseStyle
})

export default Button
