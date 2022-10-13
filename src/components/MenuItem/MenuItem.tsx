import { styled, MenuItem as MUIMenuItem } from '@mui/material'

const MenuItem = styled(MUIMenuItem)(() => {
  return {
    margin: '0.5rem',
    borderRadius: '0.45em',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    '&:active': {
      backgroundColor: `rgba(0, 0, 0, 0.08)`,
    },
  }
})

export default MenuItem
