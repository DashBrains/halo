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

  return {
    '&:hover': {
      color: shadeColor(bgColor, -10),
    },
    '&:active': {
      color: shadeColor(bgColor, -20),
    },
  }
})

export default Link
