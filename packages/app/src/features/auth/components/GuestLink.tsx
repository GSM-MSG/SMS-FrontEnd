import styled from '@emotion/styled'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

const Wrapper = styled(Link)`
  ${({ theme }) => theme.body2}
  color: var(--WHITE);
  text-decoration: underline;
  display: block;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
`

const GuestLink = ({ children, href }: Props) => {
  return <Wrapper href={href}>{children}</Wrapper>
}

export default GuestLink
