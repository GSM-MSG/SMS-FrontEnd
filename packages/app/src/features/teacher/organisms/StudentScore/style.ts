import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`

export const ValueList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const FieldValue = styled.span`
  ${({ theme }) => theme.title2}
  padding: 0.5rem 1rem;
  border-radius: 4.5rem;
  border: 1px solid #000000;
  width: min-content;
  height: min-content;
  white-space: pre;
`
