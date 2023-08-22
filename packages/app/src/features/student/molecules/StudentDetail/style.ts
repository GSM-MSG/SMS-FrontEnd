import Link from 'next/link'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 60rem;
  width: 90%;

  @media (max-width: 34rem) {
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 1rem;

  @media (max-width: 34rem) {
    margin-right: 1.25rem;
  }
`

export const CloseBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
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
