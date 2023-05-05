import styled from '@emotion/styled'

export const Wrapper = styled.section`
  max-width: 20.5rem;
  width: 90%;
  min-height: 11rem;
  padding: 1.5rem;
  background: var(--WHITE);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

export const Title = styled.h2`
  ${({ theme }) => theme.title2}
  white-space: break-spaces;
  margin-bottom: 0.25rem;
`

export const Content = styled.p`
  ${({ theme }) => theme.body1}
  white-space: break-spaces;
  color: var(--N40);
`

export const Bottom = styled.div`
  display: flex;
  gap: 0.5rem;
`
