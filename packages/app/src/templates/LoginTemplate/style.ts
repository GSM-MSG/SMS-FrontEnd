import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.main`
  margin-top: 8rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1:nth-of-type(1) {
    margin-bottom: 2rem;
  }

  h2:nth-of-type(1) {
    margin-bottom: 3rem;
  }
`

export const Video = styled.video`
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  height: 0;
  object-fit: cover;
  z-index: -1;
`

const opacity = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Text1 = styled.div`
  animation-name: ${opacity};
  animation-duration: 1s;
`

export const Text2 = styled.div`
  animation-name: ${opacity};
  animation-duration: 1.3s;
`

export const Text3 = styled.div`
  animation-name: ${opacity};
  animation-duration: 1.6s;
`
