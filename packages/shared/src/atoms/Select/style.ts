import styled from '@emotion/styled'

export const Root = styled.div`
  position: relative;
`

export const SelectTrigger = styled.div`
  width: 100%;
  background: var(--N10);
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.0625rem solid transparent;
  transition: all 0.2s;
  outline: none;

  :hover {
    border-color: var(--P2);
  }

  :focus {
    border-color: var(--P2);
  }
`

export const SelectValue = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--N30);
`

export const SelectContent = styled.div`
  position: absolute;
  width: 100%;
  max-height: 14.9375rem;
  top: calc(100% + 0.5rem);
  background: var(--WHITE);
  border-radius: 0.5rem;
  box-shadow: -1 0.25rem 1.5rem rgba(76, 75, 91, 0.12);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  overflow-y: scroll;
`

export const SelectItem = styled.label`
  ${({ theme }) => theme.body1}
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  :hover {
    background: var(--N10);
  }
`
