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

export const Activity = styled.section`
  background: var(--N10);
  padding: 0.5rem;
  border-radius: 0.5rem;
`

export const ActivityTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const ActivityTitle = styled.h3`
  ${({ theme }) => theme.body1}
`

export const ActivityDate = styled.p`
  ${({ theme }) => theme.caption2}
`

export const ActivityInfo = styled.p`
  ${({ theme }) => theme.caption2}
  color: var(--N40);
`
