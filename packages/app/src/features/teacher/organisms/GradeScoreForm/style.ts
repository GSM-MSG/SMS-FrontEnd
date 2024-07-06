import styled from '@emotion/styled'

export const Wrapper = styled.form`
  width: 100%;
  max-width: 20.5rem;
  position: sticky;
  top: 10rem;
  height: min-content;
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
`

export const Title = styled.h2`
  ${({ theme }) => theme.title1}
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  ${({ theme }) => theme.caption2}
  color: var(--N40);
`

export const Hr = styled.hr`
  border-color: var(--N20);
  border-width: 0;
  border-bottom-width: 1px;
  margin: 1.5rem 0;
`

export const ScoreContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const Total = styled.h3`
  ${({ theme }) => theme.title1}
`

export const Score = styled.h3`
  ${({ theme }) => theme.title1}
  color: var(--P2);
`
