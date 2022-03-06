import * as React from 'react'
import {
  StyledButton,
  StyledButtonContent,
  StyledButtonIcon,
  StyledButtonIconContainer,
} from './Button.styles'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  leftIcon,
  rightIcon,
  variant = 'normal',
  ...rest
}) => {
  return (
    <StyledButton color={color} variant={variant} {...rest}>
      {leftIcon && (
        <StyledButtonIconContainer right={false}>
          <StyledButtonIcon component={leftIcon} />
        </StyledButtonIconContainer>
      )}
      <StyledButtonContent>{children}</StyledButtonContent>
      {rightIcon && (
        <StyledButtonIconContainer right={true}>
          <StyledButtonIcon component={rightIcon} />
        </StyledButtonIconContainer>
      )}
    </StyledButton>
  )
}

export default Button
