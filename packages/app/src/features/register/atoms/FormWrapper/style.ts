import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background: var(--WHITE);
  width: 100%;
  max-width: 45.25rem;
  padding: 2.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 30rem) {
    width: 100%;
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
  color: var(--BLACK);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
`

export const Required = styled.span`
  color: var(--S2);
  margin-left: 0.2rem;
`
