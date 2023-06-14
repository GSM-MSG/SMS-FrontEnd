import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--N20);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 39rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ResetButtonWrapper = styled.div`
  display: none;
  @media (max-width: 39rem) {
    display: block;
  }
`

export const ResetButton = styled.span`
  ${({ theme }) => theme.body1}
  color: var(--N40);
  cursor: pointer;
`

export const FilterTitle = styled.h4`
  ${({ theme }) => theme.title2}
  color: var(--BLACK);
  text-align: left;

  @media (max-width: 39rem) {
    text-align: center;
  }
`

export const CloseIconWrapper = styled.div`
  text-align: right;
`

export const CloseIcon = styled.span`
  cursor: pointer;
`
