import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 15.75rem;
  height: 3rem;
  background-color: var(--N10);
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Label = styled.label`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`

export const Input = styled.input`
  &:checked + label {
    color: white;
    border-radius: 0.5rem;
    padding: 0.25rem;
    box-shadow: inset 0 0 0 0.25rem transparent;
    background-clip: content-box;
    background-color: var(--P2);
  }
`
