import { MouseEvent, useEffect, useRef, useState } from 'react'
import { ArrowDown } from '../../icons'
import * as S from './style'

interface Props {
  optionList: string[]
}

const Select = ({ optionList }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [value, setValue] = useState<string>(optionList[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsShow(false)
  }

  return (
    <S.Wrapper ref={ref} onClick={() => setIsShow(!isShow)}>
      <S.SelectedOption>{value}</S.SelectedOption>
      <ArrowDown />
      <S.Options isShow={isShow} onClick={onClick}>
        {optionList?.map((option) => (
          <S.Option onClick={() => setValue(option)} key={option}>
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default Select
