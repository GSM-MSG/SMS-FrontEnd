import styled from '@emotion/styled'
import { Button } from '@sms/shared'

export const Wrapper = styled.form`
  max-width: 44rem;
  width: 100%;
  margin: 4.87rem auto 7.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Bottom = styled.footer`
  @media (max-width: 41.5rem) {
    padding: 0 1.25rem;
  }
`

export const SubmitButton = styled(Button)`
  ${({ theme }) => theme.body1}
  width: 11rem;

  @media (max-width: 41.5rem) {
    width: 100%;
  }
`
