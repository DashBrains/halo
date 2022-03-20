import tw, { styled } from 'twin.macro'
import { CardProps } from './Card.types'

export const StyledCard = styled.div<CardProps>`
  ${tw`
    flex
    flex-col
    border
    rounded-md
    bg-white
  `}

  ${({ shadow }: { shadow: boolean }) => shadow && tw`shadow-md`}
`
