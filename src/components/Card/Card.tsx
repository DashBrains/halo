import {
  styled,
  Card as MUICard,
  CardActions as MUICardAction,
  CardContent as MUICardContent,
} from '@mui/material'

const Card = styled(MUICard)((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'

  return {
    borderWidth: '1px',
    borderRadius: props.theme.shape.borderRadius,
    boxShadow: `0 0px 6px 1px rgba(${shadowColor}, 0.1), 0 0px 4px 1px rgba(${shadowColor}, 0.06)`,
  }
})

const CardContent = styled(MUICardContent)({ padding: '1rem' })

const CardActions = styled(MUICardAction)({
  padding: '1rem',
})

export { CardActions, Card, CardContent }
