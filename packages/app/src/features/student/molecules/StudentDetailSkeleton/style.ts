import styled from '@emotion/styled'
export {
  Wrapper as ProfileWrapper,
  Left,
  Major,
  Name,
  Tags,
  Right,
  ProfileImage,
} from '@features/student/atoms/ProfileDetail/style'

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 3.5rem);
  background: var(--WHITE);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding-top: 1rem;

  @media (max-width: 34rem) {
    overflow: hidden;
    padding-top: 0;
  }
`
