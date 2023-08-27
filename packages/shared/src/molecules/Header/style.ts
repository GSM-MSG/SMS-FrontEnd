import styled from '@emotion/styled'
import Link from 'next/link'
import { Dropdown } from '../../atoms'

export const Wrapper = styled.div`
  max-width: 45.5rem;
  width: 90%;
  height: 4rem;
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
  z-index: 100;

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
  align-items: center;
  gap: 1.25rem;
`

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const UserInfoWrapper = styled.div`
  ${({ theme }) => theme.body1}
  height: 2.5rem;
  padding: 0 0.25rem 0 0.5rem;
  border-radius: 2rem;
  border: 1px solid var(--N10);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;

  @media (max-width: 41.5rem) {
    background: transparent;

    & > p {
      display: none;
    }
  }
`

export const UserInfoWrapperLink = styled(Link)`
  ${({ theme }) => theme.body1}
  height: 2.5rem;
  padding: 0 0.25rem 0 0.5rem;
  border-radius: 2rem;
  border: 1px solid var(--N10);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;

  @media (max-width: 41.5rem) {
    background: transparent;

    & > p {
      display: none;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  overflow: hidden;
  background: var(--N10);
  cursor: pointer;

  @media (max-width: 41.5rem) {
    width: 2rem;
    height: 2rem;
  }
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
`

export const Line = styled.hr`
  width: 80%;
  height: 1px;
  background: var(--N10);
  border: none;
  margin: 0 auto;
`
