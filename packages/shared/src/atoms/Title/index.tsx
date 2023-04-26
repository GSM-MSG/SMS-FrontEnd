import styled from '@emotion/styled'
import { ReactNode } from 'react'

type TitleType = 'title1' | 'title2'

interface Props {
  children: ReactNode
  type: TitleType
}

const Title = ({ children, type = 'title1' }: Props) => {
  return <TitleStyle type={type}>{children}</TitleStyle>
}

const TitleStyle = styled.h2<{ type: TitleType }>`
  ${(props) => props.theme[props.type]}
  color: var(--WHITE);
  white-space: break-spaces;
  text-align: center;
`

export default Title
