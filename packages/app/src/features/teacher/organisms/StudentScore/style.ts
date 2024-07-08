import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ValueList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  &:nth-child(2n) {
    border-top: 1px solid var(--N20);
    padding-top: 1rem;
    margin-top: 1rem;
  }
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
