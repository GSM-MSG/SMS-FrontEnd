import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 17rem;
  height: 27rem;
  max-height: 27rem;
  background: var(--WHITE);
  border-radius: 1.5rem;
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 41.5rem) {
    width: 100%;
    height: auto;
    min-height: 8.4rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.75rem;
  }
`

export const ProfileBackground = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--N10);
  display: flex;
  align-items: end;
  border-radius: 0.68rem;

  @media (max-width: 41.5rem) {
    overflow: scroll;
  }
`

export const ProfileImg = styled.img`
  min-width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.68rem;
  overflow: hidden;
  object-fit: cover;

  @media (max-width: 41.5rem) {
    min-width: 6.25rem;
    min-height: 6.25rem;
    width: 6.25rem;
    height: 6.25rem;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;

  @media (max-width: 41.5rem) {
    gap: 1.25rem;
  }
`

export const Name = styled.h2`
  ${({ theme }) => theme.title1}
`

export const Stack = styled.p`
  ${({ theme }) => theme.body1}
  margin-top: 0.5rem;

  @media (max-width: 41.5rem) {
    margin-top: 0.25rem;
  }
`

export const Tags = styled.div`
  max-height: 4.5rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
  overflow: hidden;

  @media (max-width: 41.5rem) {
    white-space: nowrap;
    flex-wrap: nowrap;
    overflow: scroll;
  }
`

export const Tag = styled.span`
  ${({ theme }) => theme.body1}
  background: var(--N10);
  color: var(--N40);
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
`
