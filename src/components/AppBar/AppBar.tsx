import { styled, AppBar as MUIAppBar, alpha, CSSObject } from '@mui/material'
import { CommonStyledProps, RaisedProps } from '../../utils/common'

interface baseStyleProps extends CSSObject {
  backdropFilter: string
  boxShadow?: string
  top?: number
  zIndex?: number
}

const AppBar = styled(MUIAppBar)<CommonStyledProps & RaisedProps>((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'

  const baseStyle: baseStyleProps = {
    backdropFilter: 'saturate(180%) blur(20px)',
    boxShadow: 'none',
  }

  if (props.raised) {
    baseStyle.boxShadow = `0 4px 6px 1px rgba(${shadowColor}, 0.1), 0 2px 4px 1px rgba(${shadowColor}, 0.06)`
  } else {
    baseStyle.borderBottom = `1px solid rgba(${shadowColor}, 0.12)`
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
