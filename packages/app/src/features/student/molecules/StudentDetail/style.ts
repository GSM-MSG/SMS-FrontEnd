import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 31rem;
  height: 90vh;
  position: relative;
  background: var(--WHITE);
  z-index: -2;
  border-radius: 1.5rem;

  @media (max-width: 34rem) {
    width: 100%;
    height: 100vh;
  }
`

export const CloseButton = styled.span`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
  z-index: 10;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5rem solid var(--N10);
  overflow: scroll;
  border-radius: 1.5rem;

  @media (max-width: 34rem) {
    border: none;
    border-radius: 0;
  }
`

export const LeftImage = styled.img`
  width: 30rem;
  height: 30rem;
  position: sticky;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  object-fit: cover;
  top: 0;
  z-index: -1;

  @media (max-width: 34rem) {
    width: 100%;
  }
`

export const TemeporaryImage = styled.div`
  width: 30rem;
  height: 30rem;
  padding: 0 2rem;
  background: var(--N10);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  overflow: hidden;
`

export const RightContent = styled.div`
  padding: 1.25rem;
  background: var(--WHITE);
  border-radius: 1.5rem;
  position: relative;

  @media (max-width: 34rem) {
    border-radius: 1.5rem;
  }
`

export const DreamBook = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
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
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  ${({ theme }) => theme.body1}
  background: var(--N10);
  color: var(--N40);
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
`

export const Introduce = styled.div`
  ${({ theme }) => theme.body2}
  background: var(--N10);
  color: var(--BLACK);
  padding: 1rem 1.14rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`

export const IntroduceLabel = styled.div`
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
