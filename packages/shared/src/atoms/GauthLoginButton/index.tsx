import styled from '@emotion/styled'
import * as SVG from '../../assets/svg'

interface Props {
  onClick: () => void
}

const GauthLoginButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <SVG.GauthLogo />
      Sign in with GAuth
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 3.125rem;
  background: #fff;
  color: #2e80cc;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  border-radius: 1.5rem;
`

export default GauthLoginButton
