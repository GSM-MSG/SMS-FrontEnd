import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div`
  max-width: 45.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: var(--WHITE);
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 6px rgba(27, 27, 31, 0.08);
`

export const LogoWrapper = styled(Link)`
  margin-left: 1rem;
  height: 2rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const Filter = styled.div`
  ${({ theme }) => theme.body1}
  padding: 0.75rem 1rem;
  background: var(--N10);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`

export const UserCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  overflow: hidden;
  background: var(--N10);
  cursor: pointer;
`
