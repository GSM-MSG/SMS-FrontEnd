import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegisterReturn,
  useFieldArray,
} from 'react-hook-form'
import { Input, Dropdown, Tag } from '../../atoms'
import { Search } from '../../icons'
import * as S from './style'

interface Props {
  name: string
  error?: string
  dropdownList: string[]
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string[]
  limit?: number
  control: Control<any>
  register: UseFormRegisterReturn<any>
}

const SearchInput = ({
  dropdownList,
  name,
  error,
  value,
  onChange,
  limit,
  control,
}: Props) => {
  const { fields, append, remove } = useFieldArray<FieldValues>({
    control,
    name,
  })
  const [searchValue, setSearchValue] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    if (!dropdownList) return

    setIsShow(true)
  }, [dropdownList])

  const onClose = () => setIsShow(false)
  const onAddStack = (newStack: string) => {
    if (value) append(newStack)
    setSearchValue('')
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    if (onChange) onChange(e)
  }

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }
  const onKeyUpEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !searchValue || hasTechStack()) return
    if (
      !dropdownList?.filter((i) => !value?.includes(i))[0] &&
      !includesValue()
    )
      onAddStack(searchValue)
    else onAddStack(dropdownList[0])
  }

  const hasTechStack = () => {
    return value?.filter(
      (i) => i.toLowerCase() === searchValue.toLowerCase()
    )[0]
  }

  const includesValue = () =>
    dropdownList.filter(
      (i) => i.toLowerCase() === searchValue.toLowerCase()
    )[0] || hasTechStack()

  return (
    <div>
      <S.Wrapper>
        <Input
          placeholder='찾고 싶은 세부 스택 입력'
          icon={<Search />}
          onChange={changeHandler}
          value={searchValue}
          onReset={() => setSearchValue('')}
          disabled={limit && value?.length ? value.length >= limit : false}
          onKeyDown={onKeyDownEnter}
          onKeyUp={onKeyUpEnter}
          error={error}
        />

        {!hasTechStack() && (
          <Dropdown.Menu isShow={isShow && !!searchValue} onClose={onClose}>
            {dropdownList
              ?.filter((i) => !value?.includes(i))
              ?.map((i, idx) => (
                <Dropdown.Item onClick={() => onAddStack(i)} key={idx}>
                  {i}
                </Dropdown.Item>
              ))}
            {!includesValue() && (
              <Dropdown.Item onClick={() => onAddStack(searchValue)}>
                {`+ "${searchValue}" 직접 추가하기`}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        )}
      </S.Wrapper>

      <S.Tags>
        {fields.map((field, idx) => (
          <Tag key={field.id} onRemove={() => remove(idx)}>
            {value?.[idx]}
          </Tag>
        ))}
      </S.Tags>
    </div>
  )
}

export default SearchInput
