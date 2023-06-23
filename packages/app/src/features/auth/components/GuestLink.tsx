import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`

const Link = styled.a`
  ${({ theme }) => theme.body2}
  color: var(--WHITE);
  text-decoration: underline;
  display: inline;
  text-align: center;
  cursor: pointer;
`

const GuestLink = ({ children, href }: Props) => {
  return (
    <Wrapper>
      <Link href={href}>{children}</Link>
    </Wrapper>
  )
}

export default GuestLink
