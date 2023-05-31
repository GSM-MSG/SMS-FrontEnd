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
  cursor: text;

  border: 1px solid
    ${({ isFocused }) => (isFocused ? 'var(--P2)' : 'transparent')};

  :hover {
    border: 1px solid
      ${({ isFocused }) => (isFocused ? 'var(--P2)' : 'var(--P1)')};
  }
`

export const TextFiled = styled.input`
  ${({ theme }) => theme.body1}
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`

export const ResetButton = styled.button`
  border: none;
  border-radius: 0.3rem;
  background: var(--N20);
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
