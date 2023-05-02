import styled from '@emotion/styled'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ButtonTheme } from './type'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: ButtonTheme
}

const Button = ({ theme = 'default', ...props }: Props) => {
  switch (theme) {
    case 'white':
      return <WhiteButton {...props} />
    case 'default':
    default:
      return <Wrapper {...props} />
  }
}

const Wrapper = styled.button`
  border-radius: 0.5rem;
  padding: 0.75rem;
  outline: none;
  cursor: pointer;
  min-width: 12.5rem;
  outline: none;
  transition: 0.2s;
  border: none;
  ${(props) => props.theme.title2}
  background: var(--P2);
  color: var(--WHITE);

  &:hover {
    background: var(--P1);
  }

  &:active {
    background: var(--P3);
  }

  &:disabled {
    background: var(--N20);
    color: var(--N30);
  }
`

const WhiteButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.75rem;
  outline: none;
  cursor: pointer;
  min-width: 12.5rem;
  outline: none;
  transition: 0.4s;
  border: 1px solid var(--N20);
  background: var(--WHITE);
  color: var(--BLACK);
  ${(props) => props.theme.title2}

  &:active {
    border: 1px solid var(--N30);
    background: var(--N10);
  }
`

export default Button
