import styled from '@emotion/styled'

export const Wrapper = styled.button`
  ${({ theme }) => theme.body1}
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.345rem 0.75rem 0.345rem 0.5rem;
  color: var(--N30);
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  border: none;
  background: var(--WHITE);

  :active {
    background: var(--N10);
  }
`
