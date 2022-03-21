import * as React from 'react'
import { StyledContainer, StyledInput, StyledLabel } from './Checkbox.styles'
import { CheckboxTypes } from './Checkbox.types'

const Checkbox: React.FC<CheckboxTypes> = ({ label, disabled, ...rest }) => {
  return (
    <StyledContainer>
      <StyledInput type={'checkbox'} {...rest} disabled={disabled} />
      {label && <StyledLabel disabled={disabled}>{label}</StyledLabel>}
    </StyledContainer>
  )
}

export default Checkbox
