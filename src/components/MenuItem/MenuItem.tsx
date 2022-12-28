import { styled, MenuItem as MUIMenuItem } from '@mui/material'

const MenuItem = styled(MUIMenuItem)((props) => {
  return {
    margin: '0.125rem',
    borderRadius: props.theme.shape.borderRadius,
    '&:active': {
      backgroundColor: `rgba(0, 0, 0, 0.08)`,
    },
  }
})

export default MenuItem
