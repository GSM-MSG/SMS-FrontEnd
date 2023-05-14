import { MouseEvent, useEffect, useRef, useState } from 'react'
import { ArrowDown } from '../../icons'
import * as S from './style'

interface Props {
  options: string[]
  onChange?(value: string): void
}

const Select = ({ options, onChange }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [value, setValue] = useState<string>(options[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onChange) onChange(options[0])
    const clickHandler = (e: Event) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        ref.current.contains(e.target)
      )
        return

      setIsShow(false)
    }

    document.addEventListener('click', clickHandler)

    return () => document.removeEventListener('click', clickHandler)
  }, [])

  const onShow = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsShow(false)
  }

  const onClick = (option: string) => {
    setValue(option)
    if (onChange) onChange(option)
  }

  return (
    <S.Wrapper ref={ref} onClick={() => setIsShow(!isShow)}>
      <S.SelectedOption>{value}</S.SelectedOption>
      <ArrowDown />
      <S.Options isShow={isShow} onClick={onShow}>
        {options?.map((option) => (
          <S.Option onClick={() => onClick(option)} key={option}>
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default Select
