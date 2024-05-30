import styled from '@emotion/styled'
import { InputWrapperProps } from './type'

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.label<InputWrapperProps>`
  padding: 0.8rem 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  background: var(--N10);
  transition: 0.2s;
  cursor: ${({ isDisabled }) => (isDisabled ? 'auto' : 'text')};

  :hover {
    border: 0.0625rem solid
      ${({ isFocused }) => (isFocused ? 'var(--P2)' : 'var(--P1)')};
    ${({ isDisabled }) => (isDisabled ? 'border: 1px solid transparent' : '')}
  }

  border: 0.0625rem solid
    ${({ isFocused, isDisabled }) =>
      isFocused && isDisabled ? 'var(--P2)' : 'transparent'};
`

export const TextFiled = styled.input`
  ${({ theme }) => theme.body1}
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  transition: width 0.2s;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Label = styled.div`
  word-break: keep-all;
`

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  > div {
    cursor: pointer;
  }
`

export const ResetButton = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
