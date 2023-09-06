import TextareaAutosize from 'react-textarea-autosize'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextareaField = styled(TextareaAutosize)`
  ${({ theme }) => theme.body1}
  width: 100%;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.75rem;
  resize: none;
  outline: none;
  background: var(--N10);
  transition: 0.2s;

  ::placeholder {
    color: var(--N30);
  }

  :hover {
    border: 1px solid var(--P1);
  }
  :focus {
    border: 1px solid var(--P2);
  }
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
