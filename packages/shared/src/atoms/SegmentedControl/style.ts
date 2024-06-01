import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 15.75rem;
  height: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: #f7f7f8;
  border-radius: 0.5rem;
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0rem 0.25rem;
  height: calc(100% - 0.5rem);
  align-items: center;
  cursor: pointer;
`

export const Label = styled.div`
  width: 7.5rem;
  text-align: center;
  color: #555;
  font-size: 1rem;
  font-weight: 700;
`

export const Slider = styled.div<{ checked: boolean }>`
  width: 7.5rem;
  height: calc(100% - 0.5rem);
  margin: 0.25rem;
  background: #0070f3;
  border-radius: 0.25rem;
  position: absolute;
  top: 0;
  left: ${({ checked }) => (checked ? 'calc(50% - 0.14rem)' : '0%')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  transition: left 0.3s;
  cursor: auto;
`

export const SliderText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
`
