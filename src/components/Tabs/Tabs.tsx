import { styled, Tab as MUITab } from '@mui/material'

const Tab = styled(MUITab)((props) => {
  return {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0, 0.04)',
    },
    '&:active': {
      backgroundColor: 'rgba(0,0,0, 0.08)',
    },
    borderTopLeftRadius: props.theme.shape.borderRadius,
    borderTopRightRadius: props.theme.shape.borderRadius,
  }
})

export default Tab
