import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: min-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1.5rem;

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
