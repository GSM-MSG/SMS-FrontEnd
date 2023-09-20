import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const SkeletonAnimation = keyframes`
  0% {
    background: hsl(200, 20%, 70%);
  }
  100% {
    background: hsl(200, 20%, 95%);
  }
`

export const SkeletonContent = styled.span`
  display: block;
  opacity: 0.7s;
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
  border-radius: 0.25rem;
`

interface TextProps {
  width?: string
  height?: string
  marginRight?: string
  marginBottom?: string
}

export const SkeletonText = ({
  width = '100%',
  height = '1em',
  marginRight,
  marginBottom,
}: TextProps) => {
  return (
    <SkeletonTextStyle style={{ width, height, marginBottom, marginRight }} />
  )
}

const SkeletonTextStyle = styled.span`
  display: block;
  opacity: 0.7s;
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
  border-radius: 0.25rem;
`
