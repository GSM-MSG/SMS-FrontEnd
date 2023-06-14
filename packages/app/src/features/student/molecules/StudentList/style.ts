import styled from '@emotion/styled'

export const Content = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;

  @media (max-width: 41.5rem) {
    width: 100%;
  }
`

export const MaxCount = styled.p`
  width: 100%;
  ${({ theme }) => theme.title2}
  color: var(--N30);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const Count = styled.span`
  ${({ theme }) => theme.title1}
  color: var(--BLACK);
`

export const Students = styled.div`
  width: min-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  @media (max-width: 97rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 78.5rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 60rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 41.5rem) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`
