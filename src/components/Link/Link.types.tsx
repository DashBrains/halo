import * as React from 'react'

export type LinkUnderline = 'always' | 'hover' | 'none'
export type LinkColor = 'primary' | 'inherit'

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  underline?: LinkUnderline
  color?: LinkColor
}
