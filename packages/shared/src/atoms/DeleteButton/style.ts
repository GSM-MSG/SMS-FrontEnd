import styled from '@emotion/styled'

export const Wrapper = styled.button`
  min-width: 2.5rem;
  min-height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 100;

  path {
    transition: 0.1s;
  }

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: var(--N10);
    transform: scale(0);
    transition: 0.1s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  :hover {
    ::before {
      transform: scale(1);
    }

    path:not(:nth-of-type(2)) {
      fill: var(--ERROR);
    }
    path:nth-of-type(2) {
      fill: var(--WHITE);
    }
  }
`
