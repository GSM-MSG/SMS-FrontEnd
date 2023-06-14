import styled from '@emotion/styled'

export const Wrapper = styled.div``

export const SelectContent = styled.div`
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

    color: var(--N30);
  }
`

export const SelectedOption = styled.div`
  ${({ theme }) => theme.body1}
  color: var(--N30);
`

export const CheckButton = styled.input`
  position: absolute;
  opacity: 0;
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
