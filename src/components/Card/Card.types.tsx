import * as React from 'react'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  shadow?: boolean
}

export type CardContentProps = React.ComponentPropsWithoutRef<'div'>
