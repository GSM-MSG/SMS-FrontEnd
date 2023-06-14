import styled from '@emotion/styled'

export const Wrapper = styled.label`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
`

export const Input = styled.input`
  :checked:active ~ label::before {
    content: '';
    position: absolute;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    transform: scale(1.6);
    background: var(--N20);
    z-index: -2;
  }

  :checked ~ label {
    background: var(--P2);
    border: none;

    svg {
      display: block;
    }
  }
`

export const Checkbox = styled.label`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  display: inline-block;
  border: 2px solid var(--N20);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  svg {
    display: none;
  }

  ::before {
    transition: 0.2s;
  }
`
