import tw, { styled } from 'twin.macro'
import * as React from 'react'
import Button from '../Button'
import { AlertProps, AlertSeverity } from './Alert.types'

const AlertSeverityColor = {
  success: tw`
    bg-green-100
    text-green-600
  `,
  info: tw`
    bg-blue-100
    text-blue-600
  `,
  warning: tw`
    bg-yellow-100
    text-yellow-600
  `,
  error: tw`
    bg-red-100
    text-red-600
  `,
}

export const StyledAlert = styled.div<AlertProps>`
  ${tw`
    flex
    justify-between
    items-start
    rounded-md
    text-sm
    p-3
  `}

  ${({ severity }: { severity: AlertSeverity }) => AlertSeverityColor[severity]}
`

export const StyledAlertIcon = styled(
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
    mr-2
  `}
`

export const StyledAlertButton = styled(Button)`
  ${tw`
    p-0
  `}
`

export const StyledAlertContent = styled.span`
  ${tw`
    flex-grow
    flex
    flex-col
    font-normal
  `}
`
