import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const afterAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const beforeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.6);
  }
`

export const Wrapper = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--N30);
`

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  border: 2px solid var(--N20);
  position: relative;
  transition: 0.4s;
`

export const Input = styled.input`
  display: none;

  :checked ~ span {
    color: var(--N50);
  }
  :checked ~ div {
    border: 0.125rem solid var(--P2);
    color: var(--N50);

    ::after {
      display: block;
      content: '';
      background: var(--P2);
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 100%;
      animation: ${afterAnimation} 0.4s forwards;
    }

    ::before {
      content: '';
      position: absolute;
      background: var(--N20);
      opacity: 0.5;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      z-index: -100;
      animation-duration: 0.4s;
      animation: ${beforeAnimation} 0.6s forwards;
    }
  }
`

export const Label = styled.span`
  ${({ theme }) => theme.body2}
  cursor: pointer;
`
