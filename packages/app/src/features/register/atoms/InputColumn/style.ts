import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 1.25rem;
  white-space: pre-wrap;

  @media (max-width: 30rem) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Comment = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--N40);
  white-space: pre-wrap;
`
