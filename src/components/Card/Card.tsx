import { styled, Card as MUICard } from '@mui/material'

const Card = styled(MUICard)((props) => {
  return {
    borderWidth: '1px',
    borderRadius: props.theme.shape.borderRadius,
    boxShadow:
      '0 0px 6px 1px rgba(0, 0, 0, 0.1), 0 0px 4px 1px rgba(0, 0, 0, 0.06)',
  }
})

export default Card
