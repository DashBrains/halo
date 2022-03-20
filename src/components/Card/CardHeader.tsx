import * as React from 'react'
import { CardContentProps } from './Card.types'
import { StyledCardHeader } from './CardHeader.styles'

const CardHeader: React.FC<CardContentProps> = ({ children, ...rest }) => {
  return <StyledCardHeader {...rest}>{children}</StyledCardHeader>
}

export default CardHeader
