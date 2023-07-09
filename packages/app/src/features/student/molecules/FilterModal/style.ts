import styled from '@emotion/styled'

export const Wrapper = styled.form`
  max-width: 35rem;
  max-height: 46.25rem;
  width: 100%;
  height: 90%;
  background: var(--WHITE);
  border-radius: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 39rem) {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  height: 100%;
  overflow: scroll;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1.47rem;
  border-top: 1px solid var(--N20);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--WHITE);

  button {
    width: 11.5rem;
  }

  @media (max-width: 39rem) {
    button {
      width: 100%;
    }
  }
`

export const ResetButton = styled.div`
  ${({ theme }) => theme.title2}
  color: var(--N40);
  cursor: pointer;

  @media (max-width: 39rem) {
    display: none;
  }
`
