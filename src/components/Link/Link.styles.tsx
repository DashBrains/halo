import tw, { styled } from 'twin.macro'
import { LinkColor, LinkProps, LinkUnderline } from './Link.types'

export const StyledLink = styled.a<LinkProps>`
  ${({ color }: { color: LinkColor }) =>
    color === 'primary'
      ? tw`
        text-blue-600
        hover:text-blue-700
        active:text-blue-800
      `
      : 'color: inherit;'}

  ${({ underline }: { underline: LinkUnderline }) => {
    switch (underline) {
      case 'hover':
        return tw`
            hover:underline
          `
      case 'always':
        return tw`
            underline
          `
      default:
        return tw`
            no-underline
          `
    }
  }}
`
