import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Input } from '../../atoms'
import * as S from './style'

interface Props {
  min: number
  max: number
  onChange(min: number, max: number): void
}

const MultiRangeSlider = ({ min, max, onChange }: Props) => {
  const [minValue, setMinValue] = useState<number>(min)
  const [maxValue, setMaxValue] = useState<number>(max)
  const minValueRef = useRef<HTMLInputElement>(null)
  const maxValueRef = useRef<HTMLInputElement>(null)
  const rangeRef = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  useEffect(() => {
    if (!maxValueRef.current || !rangeRef.current) return

    const minPercent = getPercent(minValue)
    const maxPercent = getPercent(+maxValueRef.current.value)

    rangeRef.current.style.left = `${minPercent}%`
    rangeRef.current.style.width = `${maxPercent - minPercent}%`
  }, [minValue, getPercent])

  useEffect(() => {
    if (!minValueRef.current || !rangeRef.current) return

    const minPercent = getPercent(+minValueRef.current.value)
    const maxPercent = getPercent(maxValue)

    rangeRef.current.style.width = `${maxPercent - minPercent}%`
  }, [maxValue, getPercent])

  useEffect(() => {
    onChange(minValue, maxValue)
  }, [minValue, maxValue, onChange])

  const onChangeRightInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, maxValue - 100)
    setMinValue(value)
    e.target.value = value + ''
  }

  const onChangeLeftInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, minValue + 100)
    setMaxValue(value)
    e.target.value = value + ''
  }

  return (
    <S.Wrapper>
      <S.RangeLeftInput
        type='range'
        min={min}
        max={max}
        value={minValue}
        ref={minValueRef}
        onChange={onChangeRightInput}
        isUp={minValue > max - 100}
      />
      <S.RangeRightInput
        type='range'
        min={min}
        max={max}
        value={maxValue}
        ref={maxValueRef}
        onChange={onChangeLeftInput}
      />

      <S.Slider className='slider'>
        <S.SliderTrack className='slider__track' />
        <S.SliderRange ref={rangeRef} className='slider__range' />
        <S.Inputs>
          <Input
            type='number'
            min={min}
            max={maxValue}
            value={minValue}
            onChange={onChangeRightInput}
          />
          <Input
            type='number'
            min={minValue}
            max={max}
            value={maxValue}
            onChange={onChangeLeftInput}
          />
        </S.Inputs>
      </S.Slider>
    </S.Wrapper>
  )
}

export default MultiRangeSlider
