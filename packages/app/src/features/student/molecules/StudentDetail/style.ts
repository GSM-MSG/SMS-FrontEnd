import Link from 'next/link'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 3.5rem);
  background: var(--WHITE);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding-top: 1rem;

  @media (max-width: 34rem) {
    overflow: hidden;
    padding-top: 0;
  }
`

export const PortfolioWrapper = styled.div`
  padding: 0 1.25rem 3.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
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

export const ShareButton = styled.div`
  ${({ theme }) => theme.title2}
  max-width: 15rem;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--BLACK);
  background: var(--WHITE);
  text-decoration: none;
  border-radius: 0.5rem;
  border: 1px solid var(--P2);
  cursor: pointer;

  @media (max-width: 34rem) {
    max-width: 100%;
  }
`
