import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 90%;

  input[type='range'] {
    height: 0;
    position: absolute;
    appearance: none;
    pointer-events: none;
    outline: none;
    width: 90%;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    ::-webkit-slider-thumb {
      background-color: var(--WHITE);
      border: 2px solid var(--P2);
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
      margin-top: 0.3rem;
      pointer-events: all;
      position: relative;
    }

    ::-moz-range-thumb {
      background-color: var(--WHITE);
      border: 2px solid var(--P2);
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
      margin-top: 0.3rem;
      pointer-events: all;
      position: relative;
    }
  }
`

export const RangeLeftInput = styled.input<{ isUp: boolean }>`
  z-index: ${({ isUp }) => (isUp ? 5 : 3)};
`

export const RangeRightInput = styled.input`
  z-index: 4;
`

export const Slider = styled.div`
  position: relative;
  width: 100%;
`
export const SliderTrack = styled.div`
  height: 2px;
  border-radius: 0.5rem;
  width: 100%;
  z-index: 1;
  background: var(--N10);
  position: absolute;
`

export const SliderRange = styled.div`
  position: absolute;
  z-index: 2;
  background: var(--P2);
  height: 2px;
`
