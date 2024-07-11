import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: var(--N10);
`

export const Content = styled.div`
  max-width: 44rem;
  width: 100%;
  margin: 4.87rem auto 7.25rem;
`

export const Title = styled.h1`
  ${({ theme }) => theme.headline3}
  margin-bottom: 1.25rem;
`

export const Section = styled.section`
  background: #ffffff;
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.h4`
  ${({ theme }) => theme.title2}
  margin-bottom: 0.25rem;
`

export const Score = styled.h1`
  ${({ theme }) => theme.headline3}
  color: var(--P2);
  margin-bottom: 0.75rem;
`

export const Description = styled.p`
  ${({ theme }) => theme.body2}
  color: var(--N40);
`

export const Pending = styled.h4`
  ${({ theme }) => theme.title2}
  color: var(--N40);
`
