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
  justify-content: space-between;
`

export const ProfileBackground = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--N10);
  display: flex;
  align-items: end;
  border-radius: 0.68rem;
  overflow: hidden;
`

export const ProfileImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.68rem;
  overflow: hidden;
  object-fit: cover;
`

export const Name = styled.h2`
  ${({ theme }) => theme.title1}
`

export const Stack = styled.p`
  ${({ theme }) => theme.body1}
  margin-top: 0.5rem;
`

export const Tags = styled.div`
  max-height: 4.5rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
  overflow: hidden;
`

export const Tag = styled.span`
  ${({ theme }) => theme.body1}
  background: var(--N10);
  color: var(--N40);
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
`
