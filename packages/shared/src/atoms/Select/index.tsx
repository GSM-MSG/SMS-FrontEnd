import { MouseEvent, useEffect, useRef, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { ArrowDown } from '../../icons'
import Input from '../Input'
import * as S from './style'
import { OptionsType } from './type'

interface Props {
  options: OptionsType
  register: any
  control: Control<any>
  name: string
  directInput?: boolean
}

const Select = ({ options, name, register, control, directInput }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const optionKeys = Object.keys(options)
  const [value, setValue] = useState<string>(optionKeys[0])
  const ref = useRef<HTMLDivElement>(null)
  const [directIsChecked, setDirectIsChecked] = useState<boolean>(false)

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
    <S.Wrapper>
      <S.SelectWrapper ref={ref} onClick={() => setIsShow(!isShow)}>
        <S.SelectedOption>
          {directIsChecked ? '직접 입력' : value}
        </S.SelectedOption>
        <ArrowDown />
        <S.Options isShow={isShow} onClick={onShow}>
          {optionKeys.map((key) => (
            <Controller
              key={key}
              name={name}
              control={control}
              render={({ field }) => (
                <S.Option onClick={() => onClick(key)}>
                  <S.CheckButton
                    {...field}
                    name={name}
                    value={options[key]}
                    defaultChecked={value === options[key]}
                    type='radio'
                    onClick={() => setDirectIsChecked(false)}
                  />
                  {key}
                </S.Option>
              )}
            />
          ))}

          {directInput && (
            <S.Option>
              <S.CheckButton
                onClick={() => setDirectIsChecked(true)}
                {...register(name)}
                name={name}
                value={''}
                type='radio'
              />
              직접 입력
            </S.Option>
          )}
        </S.Options>
      </S.SelectWrapper>

      {directIsChecked && (
        <Controller
          name={name}
          control={control}
          rules={{ required: { value: true, message: '필수 값입니다' } }}
          render={({ field, formState: { errors } }) => (
            <Input
              error={errors[name]?.message && `${errors[name]?.message}`}
              isReset
              placeholder='직접 입력'
              {...field}
            />
          )}
        />
      )}
    </S.Wrapper>
  )
}

export default Select
