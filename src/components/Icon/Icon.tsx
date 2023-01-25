import * as React from 'react'
import * as tabler from '@tabler/icons-react'
import { createSvgIcon, styled, SvgIconProps } from '@mui/material'

type TablerIcons = keyof typeof tabler
type WithoutIconSufix<T> = T extends `Icon${infer P}` ? P : never

export interface IconProps extends SvgIconProps {
  icon: WithoutIconSufix<TablerIcons>
}

const Icon: React.FC<IconProps> = (props) => {
  const icon = `Icon${props.icon}` as TablerIcons
  let SelectedIcon

  if (!Object.keys(tabler).includes(icon)) {
    SelectedIcon = tabler.IconQuestionMark
  } else {
    SelectedIcon = tabler[icon]
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const IC = createSvgIcon(<SelectedIcon />, String(props.icon))

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
