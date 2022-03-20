import * as React from 'react'
import { CardContentProps } from './Card.types'
import { StyledCardContent } from './CardContent.styles'

const CardContent: React.FC<CardContentProps> = ({ children, ...rest }) => {
  return <StyledCardContent {...rest}>{children}</StyledCardContent>
}

export default CardContent
