import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 60rem;
  width: 90%;
  height: calc(100% - 2rem);
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`

export const CloseBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: var(--WHITE);
  border-radius: 1rem;
  padding-top: 1rem;
`
