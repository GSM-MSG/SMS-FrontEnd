import styled from '@emotion/styled'

export const InputLabel = styled.label`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--N10);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
`
