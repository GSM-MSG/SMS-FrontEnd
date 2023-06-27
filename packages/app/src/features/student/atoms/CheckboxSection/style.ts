import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 0 1.25rem;
  padding-top: 0;
`

export const Title = styled.h4`
  ${({ theme }) => theme.body1}
  color: var(--BLACK);
  margin-bottom: 1rem;
`

export const CheckboxList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`
