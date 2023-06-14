import { useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { ArrowDown } from '../../icons'
import Input from '../../atoms/Input'
import Dropdown from '../../atoms/Dropdown'
import * as S from './style'
import { OptionsType } from './type'

interface Props {
  options: OptionsType
  register: any
  control: Control<any>
  name: string
  directInput?: boolean
  placeholder?: string
  error?: string
}

const Select = ({
  options,
  name,
  register,
  control,
  directInput,
  placeholder,
  error,
}: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const optionKeys = Object.keys(options)
  const [label, setLabel] = useState<string>(placeholder || '선택하기')
  const [directIsChecked, setDirectIsChecked] = useState<boolean>(false)

  const onClose = () => setIsShow(false)

  const onClick = (option: string) => setLabel(() => option)

  return (
    <S.Wrapper>
      <S.SelectContent>
        <S.SelectWrapper onClick={() => setIsShow(!isShow)}>
          <S.SelectedOption>
            {directIsChecked ? '직접 입력' : label}
          </S.SelectedOption>
          <ArrowDown />
          <Dropdown.Menu isShow={isShow} onClose={onClose}>
            {optionKeys.map((key) => (
              <Controller
                key={key}
                name={name}
                rules={{ required: { value: true, message: '필수 값입니다' } }}
                control={control}
                render={({ field }) => (
                  <Dropdown.Item onClick={() => onClick(key)}>
                    <S.CheckButton
                      {...field}
                      name={name}
                      value={options[key]}
                      type='radio'
                      onClick={() => setDirectIsChecked(false)}
                    />
                    {key}
                  </Dropdown.Item>
                )}
              />
            ))}

            {directInput && (
              <Dropdown.Item>
                <S.CheckButton
                  onClick={() => setDirectIsChecked(true)}
                  {...register(name)}
                  name={name}
                  value={''}
                  type='radio'
                />
                직접 입력
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
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
      </S.SelectContent>
      {error && !directIsChecked && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Select
