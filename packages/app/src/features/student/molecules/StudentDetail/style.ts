import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: grid;
  width: 53.75rem;
  height: 26.875rem;
  grid-template-columns: 1fr 1fr;
  border: 0.5rem solid var(--N10);
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
`

export const LeftImage = styled.img`
  background: var(--WHITE);
  width: 100%;
  height: 100%;
`

export const RightContent = styled.div`
  padding: 1.25rem;
  overflow: scroll;
  background: var(--WHITE);
`

export const CloseButton = styled.span`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
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
  gap: 0.5rem;
`

export const Tag = styled.span`
  ${({ theme }) => theme.body1}
  background: var(--N10);
  color: var(--N40);
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`

export const Introduce = styled.p`
  ${({ theme }) => theme.body2}
  background: var(--N10);
  color: var(--BLACK);
  padding: 1rem 1.14rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`

export const IntroduceLabel = styled.p`
  ${({ theme }) => theme.caption2}
  color: var(--N40);
  margin-bottom: 0.25rem;
`

export const RowTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`

export const TableColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`

export const TableTitle = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--BLACK);
`

export const TableValue = styled.div`
  ${({ theme }) => theme.body2}
  color: var(--N40);
`

export const TableLine = styled.hr`
  border: 1px solid var(--N20);
`
