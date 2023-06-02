import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 17rem;
  height: 27rem;
  max-height: 27rem;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: var(--WHITE);
  border-radius: 1.5rem;
  padding: 1.5rem;
  cursor: pointer;
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

export const Name = styled.h2`
  ${({ theme }) => theme.title1}
  margin-top: 1rem;
`

export const Stack = styled.p`
  ${({ theme }) => theme.body1}
  margin-top: 0.5rem;
`

export const Tags = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Tag = styled.span`
  ${({ theme }) => theme.body1}
  background: var(--N10);
  color: var(--N40);
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
`
