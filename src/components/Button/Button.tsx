import * as React from 'react'
import {
  StyledButton,
  StyledButtonContent,
  StyledButtonIcon,
  StyledButtonIconContainer,
} from './Button.styles'
import { ButtonProps } from './Button.types'
import { Lock, User } from 'lucide-react'

const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  color = 'primary',
  disabled = false,
  disableRing = false,
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      color={color}
      disabled={disabled}
      disableRing={disableRing}
    >
      {/*<StyledButtonIconContainer right={false}>
          <StyledButtonIcon component={<Lock />} />
        </StyledButtonIconContainer>*/}
      <StyledButtonContent>{children}</StyledButtonContent>
      {/*<StyledButtonIconContainer right={true}>
          <StyledButtonIcon component={<User />} />
        </StyledButtonIconContainer>*/}
    </StyledButton>
  )
}

export default Button
