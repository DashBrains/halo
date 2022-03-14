import tw, { styled } from 'twin.macro'
import { ButtonColor, ButtonProps, ButtonVariant } from './Button.types'
import * as React from 'react'

const ButtonColors = {
  primary: {
    normal: tw`
        bg-blue-600
        disabled:bg-blue-400
        disabled:hover:bg-blue-400
        hover:bg-blue-700
        active:bg-blue-800
        focus:ring-blue-600
        text-white
  `,
    outlined: tw`
        text-blue-600
        disabled:text-blue-400
        disabled:hover:text-blue-400
        disabled:border-blue-400
        disabled:hover:border-blue-400
        border-blue-600
        hover:text-blue-700
        hover:border-blue-700
        active:text-blue-800
        active:border-blue-800
        focus:ring-blue-600
  `,
    text: tw`
        text-blue-600
        disabled:text-blue-400
        disabled:hover:text-blue-400
        hover:text-blue-700
        active:text-blue-800
        focus:ring-blue-600
  `,
  },
  success: {
    normal: tw`
        bg-green-600
        disabled:bg-green-400
        disabled:hover:bg-green-400
        hover:bg-green-700
        active:bg-green-800
        focus:ring-green-600
        text-white
  `,
    outlined: tw`
        text-green-600
        disabled:text-green-400
        disabled:hover:text-green-400
        disabled:border-green-400
        disabled:hover:border-green-400
        border-green-600
        hover:text-green-700
        hover:border-green-700
        active:text-green-800
        active:border-green-800
        focus:ring-green-600
  `,
    text: tw`
        text-green-600
        disabled:text-green-400
        disabled:hover:text-green-400
        hover:text-green-700
        active:text-green-800
        focus:ring-green-600
  `,
  },
  error: {
    normal: tw`
        bg-red-600
        disabled:bg-red-400
        disabled:hover:bg-red-400
        hover:bg-red-700
        active:bg-red-800
        focus:ring-red-600
        text-white 
  `,
    outlined: tw`
        text-red-600
        disabled:text-red-400
        disabled:hover:text-red-400
        disabled:border-red-400
        disabled:hover:border-red-400
        border-red-600
        hover:text-red-700
        hover:border-red-700
        active:text-red-800
        active:border-red-800
        focus:ring-red-600
  `,
    text: tw`
        text-red-600
        disabled:text-red-400
        disabled:hover:text-red-400
        hover:text-red-700
        active:text-red-800
        focus:ring-red-600
  `,
  },
  warning: {
    normal: tw`
        bg-yellow-600
        disabled:bg-yellow-400
        disabled:hover:bg-yellow-400
        hover:bg-yellow-700
        active:bg-yellow-800
        focus:ring-yellow-600
        text-white 
  `,
    outlined: tw`
        text-yellow-600
        disabled:text-yellow-400
        disabled:hover:text-yellow-400
        disabled:border-yellow-400
        disabled:hover:border-yellow-400
        border-yellow-600
        hover:text-yellow-700
        hover:border-yellow-700
        active:text-yellow-800
        active:border-yellow-800
        focus:ring-yellow-600
  `,
    text: tw`
        text-yellow-600
        disabled:text-yellow-400
        disabled:hover:text-yellow-400
        hover:text-yellow-700
        active:text-yellow-800
        focus:ring-yellow-600
  `,
  },
}

export const StyledButtonIconContainer = styled.span`
  ${tw`
    justify-self-start
    left-0 
    inset-y-0 
    flex 
    items-center 
  `}

  ${({ right, disablePadding }: { right: boolean; disablePadding: boolean }) =>
    right ? !disablePadding && tw`pl-2` : !disablePadding && tw`pr-2`}
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
  `}
`

export const StyledButtonContent = styled.span`
  ${tw`
    flex-grow
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
    focus:outline-none 
  `}

  ${({ disableRing }: { disableRing?: boolean }) =>
    !disableRing &&
    tw`
      focus:ring-2
      focus:ring-offset-2
    `}
  ${({ variant }: { variant: ButtonVariant }) =>
    variant === 'icon' ? tw`rounded-full` : tw`rounded-md`}
  ${({ fullWidth }: { fullWidth?: boolean }) => fullWidth && tw`w-full`}
  ${({ disabled }: { disabled?: boolean }) => disabled && tw`cursor-default`}
  ${({ color, variant }: { color: ButtonColor; variant: ButtonVariant }) =>
    variant === 'icon'
      ? ButtonColors[color]['text']
      : ButtonColors[color][variant]}
`
