import Link from 'next/link'
import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 60rem;
  width: 90%;
  min-height: calc(100% - 3.5rem);
  background: var(--WHITE);
  border-radius: 1rem;
  padding-top: 1rem;

  @media (max-width: 41.5rem) {
    overflow: hidden;
    padding-top: 0;
  }
`

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const PortfolioWrapper = styled.div`
  padding: 0 1.25rem 3.5rem;
  display: flex;
  justify-content: center;
`

export const PortfolioButton = styled(Link)`
  ${({ theme }) => theme.title2}
  max-width: 15rem;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--WHITE);
  background: var(--P2);
  text-decoration: none;
  border-radius: 0.5rem;

  @media (max-width: 34rem) {
    max-width: 100%;
  }
`
