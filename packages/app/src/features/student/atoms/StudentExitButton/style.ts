import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin-top: 7.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const Comment = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--N40);
`

export const ExitButton = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--N50);
  text-decoration: underline;
  cursor: pointer;
`
