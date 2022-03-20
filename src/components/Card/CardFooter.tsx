import * as React from 'react'
import { CardContentProps } from './Card.types'
import { StyledCardFooter } from './CardFooter.styles'

const CardFooter: React.FC<CardContentProps> = ({ children, ...rest }) => {
  return <StyledCardFooter {...rest}>{children}</StyledCardFooter>
}

export default CardFooter
