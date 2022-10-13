import {
  styled,
  Card as MUICard,
  CardActions as MUICardAction,
  CardContent as MUICardContent,
} from '@mui/material'
import { RaisedProps } from '../../utils/common'

const Card = styled(MUICard)<RaisedProps>((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'

  const baseStyle = {
    borderWidth: '1px',
    borderRadius: props.theme.shape.borderRadius,
    boxShadow: 'none',
    border: '',
  }

  if (props.raised) {
    baseStyle.boxShadow = `0 0px 6px 1px rgba(${shadowColor}, 0.1), 0 0px 4px 1px rgba(${shadowColor}, 0.06)`
  } else {
    baseStyle.border = `1px solid rgba(${shadowColor}, 0.12)`
  }

  return baseStyle
})

const CardContent = styled(MUICardContent)({ padding: '1rem' })

const CardActions = styled(MUICardAction)({
  padding: '1rem',
})

export { CardActions, Card, CardContent }
