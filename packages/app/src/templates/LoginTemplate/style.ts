import styled from '@emotion/styled'

export const Wrapper = styled.main`
  padding-top: 8rem;
  width: 100%;
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
