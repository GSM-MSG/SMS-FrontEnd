import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`

export const ImageInput = styled.input`
  display: none;
`

export const ProfileWrapper = styled.label`
  width: 10.5rem;
  height: 10.5rem;
  display: inline-flex;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--N10);
  cursor: pointer;
  position: relative;

  :hover > div {
    opacity: 1;

    svg {
      transform: rotate(0);
    }
  }
`

export const UserTempImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DarkBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.4s;

  svg {
    transition: 0.4s;
    transform: rotate(90deg);

    path {
      stroke: var(--WHITE);
    }
  }
`

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
`
