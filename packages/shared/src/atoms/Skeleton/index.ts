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
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
`

interface TextProps {
  width?: number | string
  height?: number | string
}

export const SkeletonText = styled.span<TextProps>`
  display: block;
  opacity: 0.7s;
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
  height: ${({ height }) => (height ? height : '1.5rem')};
  border-radius: 0.25rem;
  ${({ width }) => (width ? `width: ${width}` : '')};
`
