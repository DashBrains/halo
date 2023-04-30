import React, { forwardRef } from 'react'
import { styled } from '@linaria/react'

const StyledButton = styled.button`
  padding: 0px 1.375rem;
  appearance: none;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  height: 2.625rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: auto;
  border-radius: 0.125rem;
  font-weight: 600;
  position: relative;
  line-height: 1;
  font-size: 1rem;
  user-select: none;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  background-color: rgb(34, 139, 230);
  color: rgb(255, 255, 255);

  :hover {
    background-color: rgb(28, 126, 214);
  }

  :active {
    transform: translateY(0.0625rem);
  }
`

const Button = forwardRef(() => {
  return <StyledButton>Hello world</StyledButton>
})

export { Button }
