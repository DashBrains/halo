import { styled, Tab as MUITab } from '@mui/material'

const Tab = styled(MUITab)((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'

  return {
    '&:hover': {
      backgroundColor: `rgba(${shadowColor}, 0.04)`,
    },
    '&:active': {
      backgroundColor: `rgba(${shadowColor}, 0.08)`,
    },
    borderTopLeftRadius: props.theme.shape.borderRadius,
    borderTopRightRadius: props.theme.shape.borderRadius,
  }
})

export default Tab
