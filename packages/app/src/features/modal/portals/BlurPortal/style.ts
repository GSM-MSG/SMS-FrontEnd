import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.25rem);
  overflow-y: scroll;
`
