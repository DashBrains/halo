import { styled, Button as MUIButton } from '@mui/material'
import { CommonStyledProps, ButtonBase, ButtonProps } from '../../utils/common'

const Button = styled(MUIButton)<CommonStyledProps & ButtonProps>((props) =>
  ButtonBase(props)
)

export default Button
