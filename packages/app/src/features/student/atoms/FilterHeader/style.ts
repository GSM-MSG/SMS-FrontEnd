import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--N20);
  display: flex;
  justify-content: space-between;
`

export const FilterTitle = styled.h4`
  ${({ theme }) => theme.title2}
  color: var(--BLACK);
`

export const CloseIcon = styled.span`
  cursor: pointer;
`
