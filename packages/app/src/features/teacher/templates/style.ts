import styled from '@emotion/styled'

export const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--N10);
`

export const Title = styled.h2`
  ${({ theme }) => theme.headline3}
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 66.75rem;
  margin: 0 1.5rem 1.25rem;

  @media (max-width: 41.5rem) {
    margin: 0;
  }
`

export const GradeScoreFormWrapper = styled.div`
  width: 100%;
  max-width: 65.5rem;
  margin: 6.375rem auto 0;

  @media (max-width: 41.5rem) {
    margin: 1.88rem auto 7.25rem;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 200vh;
  margin: 0 1.5rem;

  @media (max-width: 41.5rem) {
    margin: 0;
  }
`
