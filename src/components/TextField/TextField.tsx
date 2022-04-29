import { styled } from '@mui/material'
import { TextField as MUITextField } from '@mui/material'

const TextField = styled(MUITextField)((props) => {
  return {
    '& .MuiOutlinedInput-root': {
      borderRadius: props.theme.shape.borderRadius,
    },
  }
})

export default TextField
