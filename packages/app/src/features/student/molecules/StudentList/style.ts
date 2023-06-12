import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 72.5rem;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1.5rem;

  @media (max-width: 78.5rem) {
    max-width: 54rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 60rem) {
    max-width: 35.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 41.5rem) {
    max-width: none;
    grid-template-columns: repeat(1, 1fr);
  }
`
