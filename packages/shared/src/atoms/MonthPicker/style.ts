import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`

export const MonthInput = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--N10);
  cursor: pointer;
  position: relative;
`

export const Text = styled.div`
  ${({ theme }) => theme.body1}
  color: var(--N30);
`

export const Modal = styled.div`
  position: absolute;
  width: 20rem;
  padding: 1.25rem;
  background: var(--WHITE);
  border-radius: 1rem;
  cursor: auto;
  box-shadow: 0px 2px 24px 0px rgba(76, 75, 91, 0.12);
  top: 100%;
  z-index: 100;
`

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
`

export const ArrowIcon = styled.div`
  cursor: pointer;
`

export const MonthList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const DateButtonInput = styled.input`
  &:checked ~ div {
    color: var(--N10);
    background: var(--N50);
  }
`

export const MonthButton = styled.div`
  ${({ theme }) => theme.title2}
  width: 100%;
  text-align: center;
  color: var(--N50);
  background: var(--N10);
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
