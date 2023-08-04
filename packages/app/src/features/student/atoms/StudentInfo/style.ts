import styled from '@emotion/styled'

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

export const RowTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  border: 0.5px solid var(--N20);
`
