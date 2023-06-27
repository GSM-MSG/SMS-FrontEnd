import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  position: relative;

  input[type='range'] {
    height: 0;
    width: inherit;
    position: absolute;
    appearance: none;
    pointer-events: none;
    outline: none;

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
      pointer-events: all;
      position: relative;
      margin-top: 0.1rem;
    }

    ::-moz-range-thumb {
      background-color: var(--WHITE);
      border: 2px solid var(--P2);
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
      pointer-events: all;
      position: relative;
      margin-top: 0.1rem;
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

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 1.44rem;

  & > div {
    max-width: 5rem;
  }
`
