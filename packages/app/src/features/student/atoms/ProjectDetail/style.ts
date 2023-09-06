import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 34rem) {
    padding: 1.25rem 1.5rem;
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
`

export const Project = styled.div``

export const ProjectInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`

export const ProjectIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background: var(--N10);
  border-radius: 0.5rem;
`

export const SubTitle = styled.div`
  ${({ theme }) => theme.body1}
`

export const ProjectDate = styled.div`
  ${({ theme }) => theme.caption2}
`

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 42.5rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 34rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ImageWrapper = styled.div`
  min-width: 8rem;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const Stack = styled.div`
  ${({ theme }) => theme.caption2}
  background: var(--N10);
  color: var(--N40);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
`

export const ProjectDescription = styled.p`
  ${({ theme }) => theme.body2}
  color: var(--N40);
  white-space: pre-line;
`

export const LinkWrapper = styled(Link)`
  background: var(--N10);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  text-decoration: none;
`

export const LinkTitle = styled.h3`
  ${({ theme }) => theme.body1}
  display: flex;
  align-items: start;
  color: var(--BLACK);
`

export const LinkUrl = styled.p`
  ${({ theme }) => theme.caption2}
  color: var(--N40);
  display: flex;
  align-items: end;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
`
