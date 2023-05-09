import styled from '@emotion/styled'
import { OptionsProps } from './type'

export const Wrapper = styled.div`
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
  }
`

export const SelectedOption = styled.div`
  ${({ theme }) => theme.body1}
  color: var(--N30);
`
export const Options = styled.div<OptionsProps>`
  width: 100%;
  max-height: 31.25rem;
  padding: 0.75rem;
  background: var(--WHITE);
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  border-radius: 0.5rem;
  transition: 0.2s;
  overflow-y: scroll;
  box-shadow: 0px 2px 24px rgba(76, 75, 91, 0.04);

  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  ${({ isShow }) => !isShow && 'pointer-events: none;'}

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Option = styled.div`
  ${({ theme }) => theme.body1}
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  background: var(--WHITE);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  transition: 0.2s;

  :hover {
    background: var(--N10);
  }
`
