import styled from '@emotion/styled'

export { Wrapper } from '@features/register/atoms/FormWrapper/style'
export {
  AddButton,
  ButtonWrapper,
  Hr,
} from '@features/register/molecules/ProjectsInput/style'

export const PriszesList = styled.div`
  display: flex;
  flex-direction: column;

  & div:last-of-type hr {
    margin-bottom: 0;
  }
`
