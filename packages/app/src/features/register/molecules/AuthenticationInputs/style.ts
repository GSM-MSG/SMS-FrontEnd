import styled from '@emotion/styled'

export { Wrapper } from '@features/register/atoms/FormWrapper/style'

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;

  & div:last-of-type hr {
    margin-bottom: 0;
  }
`

export const ImageInput = styled.div`
  width: 15.375rem;
`

export const Hr = styled.hr`
  border: none;
  border-top: 0.0625rem solid var(--N20);
  margin: 2.5rem 0;
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
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
