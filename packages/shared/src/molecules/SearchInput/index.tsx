import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { Input, Dropdown, Tag } from '../../atoms'
import { Search } from '../../icons'
import * as S from './style'

interface Props {
  name: string
  dropdownList: string[]
  setValue: UseFormSetValue<any>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string[]
  limit?: number
}

const SearchInput = ({
  dropdownList,
  name,
  setValue,
  value,
  onChange,
  limit,
}: Props) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    if (!dropdownList) return

    setIsShow(true)
  }, [dropdownList])

  const onClose = () => setIsShow(false)
  const onAddStack = (newStack: string) => {
    if (value) setValue(name, [...value, newStack])
    setSearchValue('')
  }

  const onRemove = (stack: string) => {
    setValue(
      name,
      value?.filter((i) => i !== stack)
    )
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

  const hasTechStack = () =>
    value?.filter((i) => i.toLowerCase() === searchValue.toLowerCase())[0]

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
          disabled={limit ? value?.length >= limit : false}
          onKeyDown={onKeyDownEnter}
          onKeyUp={onKeyUpEnter}
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

      {!!value?.length && (
        <S.Tags>
          {value[0] &&
            value.map((i, idx) => (
              <Tag key={idx} onRemove={() => onRemove(i)}>
                {i}
              </Tag>
            ))}
        </S.Tags>
      )}
    </div>
  )
}

export default SearchInput
