import styled from '@emotion/styled'

export const Wrapper = styled.main`
  width: 100%;
  min-height: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: var(--N10);

  @media (max-width: 41.5rem) {
    padding-top: 0;
    background: var(--WHITE);
    gap: 2rem;
  }
`
