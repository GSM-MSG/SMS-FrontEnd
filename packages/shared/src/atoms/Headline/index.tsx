import styled from '@emotion/styled'
import { ReactNode } from 'react'

type HeadlineType = 'headline1' | 'headline2' | 'headline3'

interface Porps {
  children: ReactNode
  type?: HeadlineType
}

const Headline = ({ children, type = 'headline1' }: Porps) => {
  return <Title type={type}>{children}</Title>
}

const Title = styled.h1<{ type: HeadlineType }>`
  ${(props) => props.theme[props.type]}
  color: var(--WHITE);
  white-space: break-spaces;
  text-align: center;
`

export default Headline
