import styled from '@emotion/styled'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--LIGHTBOX);
  backdrop-filter: blur(20px);
  overflow: hidden;
`

export const ModalContainer = styled.div`
  width: 31.625rem;
  height: 14.3125rem;
  background-color: var(--WHITE);
  border-radius: 1rem;
`

export const ModalContainerResponce = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
`

export const ModalMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`
