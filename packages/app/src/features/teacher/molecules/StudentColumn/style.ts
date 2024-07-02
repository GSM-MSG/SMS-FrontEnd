import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

export const Wrapper = styled(Link)`
  background-color: var(--WHITE);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  height: 5rem;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-height: 100%;
`

export const ProfileImage = styled(Image)`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.25rem;
`

export const ProfileBg = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--N10);
  border-radius: 0.25rem;
  overflow: hidden;
`

export const Name = styled.p`
  ${({ theme }) => theme.title2}
`

export const Status = styled.p`
  ${({ theme }) => theme.title2}
`
