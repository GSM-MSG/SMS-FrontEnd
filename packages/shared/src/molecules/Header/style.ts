import styled from '@emotion/styled'
import Link from 'next/link'
import { Dropdown } from '../../atoms'

export const Wrapper = styled.div`
  max-width: 45.5rem;
  width: 90%;
  padding: 0.5rem 0.75rem;
  background: var(--WHITE);
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 6px rgba(27, 27, 31, 0.08);
  margin: 0 auto;
  position: sticky;
  top: 2.5rem;

  @media (max-width: 41.5rem) {
    max-width: 100%;
    width: 100%;
    top: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--N10);
    box-shadow: 0 0 0 transparent;
  }
`

export const LogoWrapper = styled(Link)`
  margin-left: 1rem;
  width: 5rem;
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
  position: relative;

  @media (max-width: 41.5rem) {
    gap: 1.25rem;
  }
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

  @media (max-width: 41.5rem) {
    background: transparent;
    padding: 0;

    & > p {
      display: none;
    }
  }
`

export const UserCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  overflow: hidden;
  background: var(--N10);
  cursor: pointer;

  @media (max-width: 41.5rem) {
    width: 2rem;
    height: 2rem;
  }
`

export const UserCircleLink = styled(Link)`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  overflow: hidden;
  background: var(--N10);
  cursor: pointer;
`

export const DropdownMenu = styled(Dropdown.Menu)`
  width: 15rem;
  border-radius: 1rem;
  left: auto;
  right: 0;
`

export const DropdownItem = styled(Dropdown.Item)`
  display: flex;
  gap: 0.75rem;
  color: var(--ERROR);
`

export const Line = styled.hr`
  width: 80%;
  height: 1px;
  background: var(--N10);
  border: none;
  margin: 0 auto;
`
