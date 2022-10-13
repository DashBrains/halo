import { styled, IconButton as MUIIconButton, alpha } from '@mui/material'
import shadeColor from '../../utils/shadeColor'
import { CommonStyledProps } from '../../utils/common'

const IconButton = styled(MUIIconButton)<CommonStyledProps>((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'
  const color =
    props.color && props.color !== 'inherit' && props.color !== 'default'
      ? props.color
      : 'primary'
  const bgColor = props.sx?.backgroundColor
    ? props.sx?.backgroundColor
    : props.theme.palette[color].main
  const isDark = props.theme.palette.mode && props.theme.palette.mode === 'dark'

  const baseStyle = {
    '&:hover': {
      backgroundColor: `rgba(${shadowColor}, 0.04)`,
    },
    '&:active': {
      backgroundColor: `rgba(${shadowColor}, 0.08)`,
    },
    borderRadius: props.theme.shape.borderRadius,
  }

  if (props.color !== 'inherit' && props.color !== 'default') {
    baseStyle['&:hover'] = {
      backgroundColor: alpha(shadeColor(bgColor, isDark ? 10 : -10), 0.04),
    }
    baseStyle['&:active'] = {
      backgroundColor: alpha(shadeColor(bgColor, isDark ? 20 : -20), 0.08),
    }
  }

  return baseStyle
})

export default IconButton
