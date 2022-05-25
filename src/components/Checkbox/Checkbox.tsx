import * as React from 'react'
import {
  styled,
  Checkbox as MUICheckbox,
  CheckboxProps,
  alpha,
} from '@mui/material'
import { CommonStyledProps } from '../../utils/common'
import shadeColor from '../../utils/shadeColor'

const BpIcon = styled('span')<CommonStyledProps & CheckboxProps>(
  ({ theme }) =>
    (props) => {
      const color =
        props.color && props.color !== 'default' ? props.color : 'primary'
      const bgColor = props.sx?.backgroundColor
        ? props.sx?.backgroundColor
        : props.theme.palette[color].main

      const isDark =
        props.theme.palette.mode && props.theme.palette.mode === 'dark'

      const size = props.size && props.size === 'small' ? 16 : 20

      return {
        borderRadius: theme.shape.borderRadius,
        width: size,
        height: size,
        boxShadow:
          theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(0,0,0,.2), inset 0 -1px 0 rgba(0,0,0,.1)',
        backgroundColor: theme.palette.background.paper,
        '.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: alpha(shadeColor(bgColor, isDark ? 10 : -10), 0.04),
        },
        'input:focus ~ &': {
          boxShadow: `${props.theme.palette.background.default} 0px 0px 0px 2px, ${bgColor} 0px 0px 0px 4px`,
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background:
            theme.palette.mode === 'dark'
              ? 'rgba(57,75,89,.5)'
              : 'rgba(206,217,224,.5)',
        },
      }
    }
)

const BpCheckedIcon = styled(BpIcon)<CommonStyledProps & CheckboxProps>(
  (props) => {
    const color =
      props.color && props.color !== 'default' ? props.color : 'primary'
    const bgColor = props.sx?.backgroundColor
      ? props.sx?.backgroundColor
      : props.theme.palette[color].main

    const isDark =
      props.theme.palette.mode && props.theme.palette.mode === 'dark'

    const size = props.size && props.size === 'small' ? 16 : 20

    return {
      backgroundColor: bgColor,
      '&:before': {
        display: 'block',
        width: size,
        height: size,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: shadeColor(bgColor, isDark ? 10 : -10),
      },
    }
  }
)

const Checkbox = (props: CheckboxProps) => {
  return (
    <MUICheckbox
      disableRipple
      checkedIcon={<BpCheckedIcon color={props.color} size={props.size} />}
      icon={<BpIcon color={props.color} size={props.size} />}
      {...props}
    />
  )
}

export default Checkbox
