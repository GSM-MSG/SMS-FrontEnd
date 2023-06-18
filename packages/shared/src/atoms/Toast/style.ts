import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface WrapperProps {
  type: 'error' | 'success'
  isHidden: boolean
}

const showAnimation = keyframes`
  0% {
    top: -20rem;
  }
  70% {
    top: 1rem;
  }
  100% {
    top: 0;
  }
`

const hideAnimation = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: 1rem;
  }
  100% {
    top: -20rem;
  }
`

export const Wrapper = styled.span<WrapperProps>`
  width: max-content;
  min-width: 16.25rem;
  position: relative;
  height: min-content;
  margin: 0 auto;
  padding: 1.5rem 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 0.125rem 2rem rgba(0, 0, 0, 0.08);
  border-radius: 3rem;
  transition: 0.4s;
  animation-name: ${({ isHidden }) =>
    isHidden ? hideAnimation : showAnimation};
  animation-duration: 0.4s;
  animation-fill-mode: both;

  background: ${({ type }) =>
    type === 'success' ? 'var(--POSITIVE)' : 'var(--ERROR)'};
`

export const Comment = styled.div`
  ${({ theme }) => theme.body1}
  color: var(--WHITE);
`
