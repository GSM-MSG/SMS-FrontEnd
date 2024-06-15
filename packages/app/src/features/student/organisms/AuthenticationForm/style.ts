import styled from '@emotion/styled'

export const Wrapper = styled.form`
  max-width: 44rem;
  width: 100%;
  margin: 4.87rem auto 7.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    ${({ theme }) => theme.body1}
  }
`

export const Bottom = styled.footer`
  display: grid;
  grid-template-columns: 11rem;
`
