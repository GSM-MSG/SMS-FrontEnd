import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 15.75rem;
  height: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.625rem;
`

export const Label = styled.div`
  width: 7.5rem;
  text-align: center;
  color: #555;
  font-size: 1rem;
  font-weight: 700;
`

export const Slider = styled.div<{ active: boolean }>`
  width: 50%;
  height: calc(100% - 0.5rem);
  margin: 0.25rem;
  background: #0070f3;
  border-radius: 0.25rem;
  position: absolute;
  top: 0;
  left: ${(props) => (props.active ? '0%' : '50%')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  transition: left 0.3s;
`

export const SliderText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
`
