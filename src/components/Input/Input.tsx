import React from 'react'
import { StyledInput, StyledLabel } from './Input.styles'
import { InputProps } from './Input.types'

const Input: React.FC<InputProps> = ({ error = false, label, ...rest }) => {
  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput error={error} {...rest} />
    </>
  )
}

export default Input
