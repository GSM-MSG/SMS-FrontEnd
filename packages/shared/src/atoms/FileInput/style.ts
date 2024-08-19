import styled from '@emotion/styled'

export const FileInput = styled.label`
  padding: 0.8rem 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background: var(--N10);
  transition: 0.2s;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  outline: none;

  :hover {
    border-color: var(--P2);
  }

  :focus {
    border-color: var(--P2);
  }
`

export const FileName = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--N30);
`

export const Error = styled.p`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
