import styled from '@emotion/styled'
import { OptionsProps } from './type'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SelectWrapper = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0 1.25rem;
  background: var(--N10);
  border: 1px solid transparent;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    border: 1px solid var(--P1);

    div {
      color: var(--N30);
    }
  }
`

export const SelectedOption = styled.div`
  ${({ theme }) => theme.body1}
  color: var(--BLACK);
`

export const OptionWrapper = styled.div``

export const Options = styled.div<OptionsProps>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  max-height: 15.5rem;
  padding: 0.75rem;
  background: var(--WHITE);
  border-radius: 0.5rem;
  transition: 0.2s;
  overflow-y: scroll;
  box-shadow: 0px 4px 24px rgba(76, 75, 91, 0.12);

  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  ${({ isShow }) => !isShow && 'pointer-events: none;'}
`

export const Option = styled.label`
  ${({ theme }) => theme.body1}
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  background: var(--WHITE);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  transition: 0.2s;
  color: var(--BLACK);

  :hover {
    background: var(--N10);
  }
`

export const CheckButton = styled.input`
  position: absolute;
  opacity: 0;
`
