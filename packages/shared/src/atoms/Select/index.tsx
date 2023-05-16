import { MouseEvent, useEffect, useRef, useState } from 'react'
import { ArrowDown } from '../../icons'
import * as S from './style'
import { OptionsType } from './type'

interface Props {
  options: OptionsType
  register: any
  name: string
}

const Select = ({ options, name, register }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const optionKeys = Object.keys(options)
  const [value, setValue] = useState<string>(options[optionKeys[0]])
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

  const onShow = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsShow(false)
  }

  const onClick = (option: string) => {
    setValue(() => option)
  }

  return (
    <S.Wrapper ref={ref} onClick={() => setIsShow(!isShow)}>
      <S.SelectedOption>{value}</S.SelectedOption>
      <ArrowDown />
      <S.Options isShow={isShow} onClick={onShow}>
        {optionKeys.map((key, idx) => (
          <S.Option
            htmlFor={`${name}-${idx}`}
            onClick={() => onClick(options[key])}
            key={key}
          >
            <S.CheckButton
              {...register(name)}
              id={`${name}-${idx}`}
              name={name}
              value={options[key]}
              defaultChecked={value === options[key]}
              type='radio'
            />
            {options[key]}
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default Select
