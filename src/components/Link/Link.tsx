import * as React from 'react'
import { StyledLink } from './Link.styles'
import { LinkProps } from './Link.types'

const Link: React.FC<LinkProps> = ({
  children,
  color = 'primary',
  underline = 'always',
  ...rest
}) => {
  return (
    <StyledLink color={color} underline={underline} {...rest}>
      {children}
    </StyledLink>
  )
}

export default Link
