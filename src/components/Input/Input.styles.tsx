import tw, { styled } from 'twin.macro'
import { InputProps } from './Input.types'

export const StyledInput = styled.input<InputProps>`
  ${tw`
    appearance-none 
    rounded-none 
    relative 
    block 
    w-full 
    px-3 
    py-2 
    border 
    border-gray-300 
    placeholder-gray-500 
    text-gray-900 
    rounded-md
    focus:outline-none 
    focus:z-10 
    sm:text-sm
  `}

  ${({ error }: { error: boolean }) =>
    error
      ? tw`ring-red-500 border-red-500`
      : tw`focus:ring-blue-600 focus:border-blue-600`}
`
export const StyledLabel = styled.label`
  ${tw`
     block 
     text-gray-700 
     text-sm 
     font-semibold
     mb-1
  `}
`
