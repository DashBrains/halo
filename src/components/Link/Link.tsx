import { styled, Link as MUILink } from '@mui/material'
import { CommonStyledProps } from '../../utils/common'
import shadeColor from '../../utils/shadeColor'

type Colors = 'primary' | 'secondary'

const Link = styled(MUILink)<CommonStyledProps>((props) => {
  const color = (
    props.color && props.color !== 'inherit' ? props.color : 'primary'
  ) as Colors

  if (
    props.theme.palette[color]?.main === undefined ||
    props.color === 'inherit'
  ) {
    return {}
  }

  const bgColor = props.sx?.color
    ? props.sx?.color
    : props.theme.palette[color].main

  const isDark = props.theme.palette.mode && props.theme.palette.mode === 'dark'

  return {
    '&:hover': {
      color: shadeColor(bgColor, isDark ? 10 : -10),
    },
    '&:active': {
      color: shadeColor(bgColor, isDark ? 20 : -20),
    },
  }
})

export default Link
