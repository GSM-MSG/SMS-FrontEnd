import styled from '@emotion/styled'

export const Images = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`

export const Error = styled.div`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
`
