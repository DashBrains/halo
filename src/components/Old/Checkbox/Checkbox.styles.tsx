import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.div`
  ${tw`
    flex 
    items-center
  `}
`

export const StyledInput = styled.input`
  ${tw`
    form-checkbox
    h-4 
    w-4 
    text-blue-600
    focus:ring-blue-600
    disabled:hover:text-blue-400
    disabled:text-blue-400
    border-gray-300 
    rounded-md
  `}
`

export const StyledLabel = styled.label<{ disabled: boolean }>`
  ${tw`
    ml-2 
    block 
    text-sm 
    text-gray-900
  `}

  ${({ disabled }: { disabled: boolean }) => disabled && tw`text-gray-400`}
`
