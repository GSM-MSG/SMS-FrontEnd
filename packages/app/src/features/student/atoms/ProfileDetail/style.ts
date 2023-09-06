import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 5.19rem;

  @media (max-width: 34rem) {
    padding: 0;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`

export const Left = styled.div`
  width: 100%;

  @media (max-width: 34rem) {
    padding: 0 1.25rem;
  }
`

export const Major = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--S2);
  margin-bottom: 0.25rem;
`

export const Name = styled.h4`
  ${({ theme }) => theme.headline3}
  color: var(--BLACK);
  margin-bottom: 0.5rem;
`

export const SchoolInfo = styled.p`
  ${({ theme }) => theme.body2}
  color: var(--N40);
  margin-bottom: 1rem;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`

export const Tag = styled.span`
  ${({ theme }) => theme.caption2}
  background: var(--N10);
  color: var(--N40);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
`

export const Introduce = styled.div`
  ${({ theme }) => theme.body2}
  background: var(--N10);
  color: var(--BLACK);
  padding: 1rem 1.14rem;
  border-radius: 0.5rem;
  white-space: pre-line;
`

export const IntroduceLabel = styled.div`
  ${({ theme }) => theme.caption2}
  color: var(--N40);
  margin-bottom: 0.25rem;
`

export const Right = styled.div`
  @media (max-width: 34rem) {
    width: 100%;
  }
`

export const ProfileImage = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 0.48rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 34rem) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`

export const TemeporaryImage = styled.div`
  width: 10rem;
  height: 10rem;
  padding: 0 0.7rem;
  background: var(--N10);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0.48rem;

  @media (max-width: 34rem) {
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }
`
