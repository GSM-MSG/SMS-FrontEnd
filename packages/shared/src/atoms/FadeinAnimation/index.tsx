import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface Props {
  children: ReactNode
  duration?: number
}

const FadeinAnimation = ({ children, duration = 1 }: Props) => {
  return <Wrapper duration={duration}>{children}</Wrapper>
}

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div<{ duration: number }>`
  animation-name: ${animation};
  animation-duration: ${({ duration }) => duration}s;
`

export default FadeinAnimation
