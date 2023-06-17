import styled from '@emotion/styled'

interface WrapperProps {
  type: 'error' | 'success'
}

export const Wrapper = styled.span<WrapperProps>`
  width: max-content;
  min-width: 16.25rem;
  height: min-content;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  padding: 1.5rem 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 0.125rem 2rem rgba(0, 0, 0, 0.08);
  border-radius: 3rem;

  background: ${({ type }) =>
    type === 'success' ? 'var(--POSITIVE)' : 'var(--ERROR)'};
`

export const Comment = styled.div`
  ${({ theme }) => theme.body1}
  color: var(--WHITE);
`
