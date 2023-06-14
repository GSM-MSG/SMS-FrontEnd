import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 35rem;
  max-height: 46.25rem;
  width: 100%;
  height: 90vh;
  background: var(--WHITE);
  border-radius: 1.5rem;

  @media (max-width: 39rem) {
    max-width: 100%;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
  }
`
