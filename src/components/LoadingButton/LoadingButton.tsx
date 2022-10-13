import { LoadingButton as MUILoadingButton } from '@mui/lab'
import { ButtonBase, ButtonProps, CommonStyledProps } from '../../utils/common'
import { styled } from '@mui/material'

const LoadingButton = styled(MUILoadingButton)<CommonStyledProps & ButtonProps>(
  (props) => ButtonBase(props)
)

export default LoadingButton
