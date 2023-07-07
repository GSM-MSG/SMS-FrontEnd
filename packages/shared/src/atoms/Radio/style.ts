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

export const RadioButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid var(--N20);
  cursor: pointer;
  position: relative;
  transition: 0.4s;
`

export const Input = styled.input`
  display: none;

  :checked ~ span {
    color: var(--N50);
  }
  :checked ~ label {
    border: 2px solid var(--P2);
    color: var(--N50);

    ::after {
      display: block;
      content: '';
      background: var(--P2);
      width: 12px;
      height: 12px;
      border-radius: 100%;
      animation: ${afterAnimation} 0.4s forwards;
    }

    ::before {
      content: '';
      position: absolute;
      background: var(--N20);
      opacity: 0.5;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      z-index: -100;
      animation-duration: 0.4s;
      animation: ${beforeAnimation} 0.6s forwards;
    }
  }
`

export const Label = styled.span`
  ${({ theme }) => theme.body2}
`
