import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 34rem) {
    padding: 1.25rem 1.5rem;
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
`

export const Prize = styled.section`
  background: var(--N10);
  padding: 0.5rem;
  border-radius: 0.5rem;
`

export const PrizeTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const PrizeTitle = styled.h3`
  ${({ theme }) => theme.body1}
`

export const PrizeDate = styled.p`
  ${({ theme }) => theme.caption2}
`

export const PrizeInfo = styled.p`
  ${({ theme }) => theme.caption2}
  color: var(--N40);
`
