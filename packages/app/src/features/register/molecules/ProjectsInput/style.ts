import styled from '@emotion/styled'

export { Wrapper } from '@features/register/atoms/FormWrapper/style'

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;

  & div:last-of-type hr {
    margin-bottom: 0;
  }
`

export const IconInput = styled.div`
  max-width: 6.75rem;
  max-height: 6.75rem;
`

export const DoubleInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid var(--N20);
  margin: 2.5rem 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`

export const AddButton = styled.span`
  ${({ theme }) => theme.title2}
  display: flex;
  align-items: center;
  margin-top: 1rem;
  cursor: pointer;
`
