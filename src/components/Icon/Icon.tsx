import * as React from 'react'
import * as icons from 'lucide'
import { createSvgIcon, styled, SvgIconProps } from '@mui/material'
import { IconNode } from 'lucide'
import _ from 'lodash'

type Icons = keyof typeof icons

export interface IconProps extends SvgIconProps {
  icon: Exclude<Icons, 'icons' | 'createElement' | 'createIcons'>
}

const Icon: React.FC<IconProps> = (props) => {
  const createEls = (elements: IconNode) => {
    return elements[2]?.map((element, index) =>
      React.createElement(element[0], _.merge(element[1], { key: index }))
    )
  }

  const component = createEls(icons[props.icon])
  const IC = createSvgIcon(component, String(props.icon))

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
