import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Input } from '../../atoms'
import * as S from './style'

interface Props {
  min: number
  max: number
  minValue: number
  maxValue: number
  onChangeMin(min: number): void
  onChangeMax(max: number): void
}

const MultiRangeSlider = ({
  min,
  max,
  minValue,
  maxValue,
  onChangeMin,
  onChangeMax,
}: Props) => {
  const [minInputValue, setMinInputValue] = useState<string>(minValue + '')
  const [maxInputValue, setMaxInputValue] = useState<string>(maxValue + '')

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

    setMinInputValue(onChangeLeftInput(minValue + '') + '')
  }, [minValue, getPercent])

  useEffect(() => {
    if (!minValueRef.current || !rangeRef.current) return

    const minPercent = getPercent(+minValueRef.current.value)
    const maxPercent = getPercent(maxValue)

    rangeRef.current.style.width = `${maxPercent - minPercent}%`

    setMaxInputValue(onChangeRightInput(maxValue + '') + '')
  }, [maxValue, getPercent])

  const onChangeLeftInput = (inputValue: string) => {
    const value = Math.min(+inputValue, maxValue - 1)
    const limitValue = value <= min ? min : value
    onChangeMin(limitValue)

    return limitValue
  }

  const onChangeRightInput = (inputValue: string) => {
    const value = Math.max(+inputValue, minValue + 1)
    const limitValue = value >= max ? max : value
    onChangeMax(limitValue)

    return limitValue
  }

  const blockEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  return (
    <S.Wrapper>
      <S.RangeLeftInput
        type='range'
        min={min}
        max={max}
        value={minValue}
        ref={minValueRef}
        onChange={(e) =>
          setMinInputValue(onChangeLeftInput(e.target.value) + '')
        }
        isUp={minValue > max - 100}
      />
      <S.RangeRightInput
        type='range'
        min={min}
        max={max}
        value={maxValue}
        ref={maxValueRef}
        onChange={(e) =>
          setMaxInputValue(onChangeRightInput(e.target.value) + '')
        }
      />

      <S.Slider className='slider'>
        <S.SliderTrack className='slider__track' />
        <S.SliderRange ref={rangeRef} className='slider__range' />
        <S.Inputs>
          <Input
            type='number'
            value={minInputValue}
            onChange={(e) => {
              onChangeLeftInput(e.target.value)
              setMinInputValue(e.target.value)
            }}
            onBlur={() => setMinInputValue(minValue + '')}
            onKeyDown={blockEnter}
          />
          <Input
            type='number'
            value={maxInputValue}
            onChange={(e) => {
              onChangeRightInput(e.target.value)
              setMaxInputValue(e.target.value)
            }}
            onBlur={() => setMaxInputValue(maxValue + '')}
            onKeyDown={blockEnter}
          />
        </S.Inputs>
      </S.Slider>
    </S.Wrapper>
  )
}

export default MultiRangeSlider
