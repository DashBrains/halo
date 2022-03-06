import tw, { styled } from 'twin.macro'
import { ButtonColor, ButtonProps } from './Button.types'
import * as React from 'react'

const ButtonColors = {
  primary: tw`
    bg-blue-600
    disabled:bg-blue-400
    disabled:hover:bg-blue-400
    hover:bg-blue-700
    focus:ring-blue-600
  `,
  success: tw`
    bg-green-600
    disabled:bg-green-400
    disabled:hover:bg-green-400
    hover:bg-green-700
    focus:ring-green-600
  `,
  error: tw`
    bg-red-600
    disabled:bg-red-400
    disabled:hover:bg-red-400
    hover:bg-red-700
    focus:ring-red-600
  `,
  warning: tw`
    bg-yellow-600
    disabled:bg-yellow-400
    disabled:hover:bg-yellow-400
    hover:bg-yellow-700
    focus:ring-yellow-600
  `,
}

export const StyledButtonIconContainer = styled.span`
  ${tw`
    justify-self-start
    left-0 
    inset-y-0 
    flex 
    items-center 
  `}

  ${({ right }: { right: boolean }) => (right ? tw`pl-2` : tw`pr-2`)}
`

export const StyledButtonIcon = styled(
  ({
    component,
    ...props
  }: {
    component: React.DetailedReactHTMLElement<
      { [p: string]: never },
      HTMLElement
    >
  }) => React.cloneElement(component, props)
)`
  ${tw`
    h-5
    w-5
    text-white
  `}
`

export const StyledButtonContent = styled.span`
  ${tw`
    mr-auto
    ml-auto
  `}
`

export const StyledButton = styled.button<ButtonProps>`
  ${tw`
    relative
    flex 
    justify-center
    items-center
    py-2 
    px-4 
    border 
    border-transparent 
    text-sm 
    font-medium 
    rounded-md 
    text-white 
    focus:outline-none 
  `}

  ${({ disableRing }: { disableRing?: boolean }) =>
    disableRing
      ? ''
      : tw`
      focus:ring-2
      focus:ring-offset-2
    `}
  ${({ fullWidth }: { fullWidth?: boolean }) => (fullWidth ? tw`w-full` : '')}
  ${({ disabled }: { disabled?: boolean }) =>
    disabled ? tw`cursor-default` : ''}
  ${({ color }: { color: ButtonColor }) => ButtonColors[color]}
`
