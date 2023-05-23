import styled from '@emotion/styled'

export const HiddenInput = styled.input`
  display: none;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.label`
  min-width: 12.5rem;
  padding: 0.8rem 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  background: var(--N10);
  transition: 0.2s;
  border: 1px solid transparent;
  color: var(--N30);
  cursor: pointer;

  :hover {
    border: 1px solid var(--P1);
  }
`

export const Input = styled.input`
  display: none;
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
`
