import styled from '@emotion/styled'
import { Button } from '@sms/shared'

export const Wrapper = styled.form`
  max-width: 44rem;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
`
export const LogoWrapper = styled.div`
  width: 12.5rem;
  height: 5rem;
  margin: 0 auto 2rem;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 44rem) {
    justify-content: center;

    button {
      max-width: 90%;
    }
  }
`

export const SubmitBtn = styled(Button)`
  max-width: 11.75rem;
`
