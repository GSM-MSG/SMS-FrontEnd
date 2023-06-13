import styled from '@emotion/styled'

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

export const Content = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 41.5rem) {
    width: 100%;
  }
`

export const Students = styled.div`
  width: min-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  & > p:nth-of-type(1) {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
  }

  @media (max-width: 91rem) {
    grid-template-columns: repeat(4, 1fr);

    & > p:nth-of-type(1) {
      grid-column: 1 / 5;
    }
  }

  @media (max-width: 78.5rem) {
    grid-template-columns: repeat(3, 1fr);

    & > p:nth-of-type(1) {
      grid-column: 1 / 4;
    }
  }

  @media (max-width: 60rem) {
    grid-template-columns: repeat(2, 1fr);

    & > p:nth-of-type(1) {
      grid-column: 1 / 3;
    }
  }

  @media (max-width: 41.5rem) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);

    & > p:nth-of-type(1) {
      grid-column: 1 / 2;
    }
  }
`
