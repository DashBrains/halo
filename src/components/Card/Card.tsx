import * as React from 'react'
import { StyledCard } from './Card.styles'
import { CardProps } from './Card.types'

const Card: React.FC<CardProps> = ({ children, shadow = true, ...rest }) => {
  return (
    <StyledCard shadow={shadow} {...rest}>
      {children}
    </StyledCard>
  )
}

export default Card
