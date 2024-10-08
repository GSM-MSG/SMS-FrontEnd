import styled from '@emotion/styled'

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--N30);
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

  :checked ~ span {
    color: var(--BLACK);
  }

  :checked ~ label {
    background: var(--P2);
    border: 0.0625rem solid transparent;

    svg {
      width: 65%;
      height: 65%;
      display: block;
    }
  }
`

export const Checkbox = styled.label`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  display: inline-block;
  border: 0.125rem solid var(--N20);
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

export const Label = styled.span`
  ${({ theme }) => theme.body2}
`
