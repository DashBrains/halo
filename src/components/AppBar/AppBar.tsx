import { styled, AppBar as MUIAppBar, alpha } from '@mui/material'
import { CommonStyledProps } from '../../utils/common'

interface baseStyleProps {
  backdropFilter: string
  boxShadow: string
  borderBottomRightRadius: string | number
  borderBottomLeftRadius: string | number
  top?: number
  zIndex?: number
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AppBar = styled(MUIAppBar)<CommonStyledProps>((props) => {
  const baseStyle: baseStyleProps = {
    backdropFilter: 'saturate(180%) blur(20px)',
    boxShadow:
      '0 4px 6px 1px rgba(0, 0, 0, 0.1), 0 2px 4px 1px rgba(0, 0, 0, 0.06)',
    borderBottomRightRadius: props.theme.shape.borderRadius,
    borderBottomLeftRadius: props.theme.shape.borderRadius,
  }

  if (props.position === 'fixed') {
    baseStyle.top = 0
    baseStyle.zIndex = props.theme.zIndex.appBar
  }

  if (
    props.color &&
    (props.color === 'transparent' || props.color === 'inherit')
  )
    return baseStyle

  if (props.color && props.color === 'default') {
    return {
      ...baseStyle,
      backgroundColor: alpha(props.theme.palette.grey[100], 0.72),
      color: props.theme.palette.primary.main,
    }
  }

  const color = props.color ? props.color : 'primary'
  const bgColor = props.sx?.backgroundColor
    ? props.sx?.backgroundColor
    : props.theme.palette[color].main
  const textColor = props.sx?.color
    ? props.sx?.color
    : props.theme.palette.common.white

  return {
    ...baseStyle,
    backgroundColor: alpha(bgColor, 0.8),
    color: textColor,
  }
})

export default AppBar
