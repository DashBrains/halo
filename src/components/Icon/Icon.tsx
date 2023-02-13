import * as React from 'react'
import { createSvgIcon, styled, SvgIconProps } from '@mui/material'
import type { TablerIconsProps } from '@tabler/icons-react'

export interface IconProps extends SvgIconProps {
  icon: (props: TablerIconsProps) => JSX.Element
}

const Icon: React.FC<IconProps> = (props) => {
  const IC = createSvgIcon(<props.icon />, String(props.icon))

  return (
    <IC
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  )
}

const StyledIcon = styled(Icon)({
  fill: 'none',
})

export default StyledIcon
