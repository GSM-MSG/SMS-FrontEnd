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
  limit?: number
}

const SearchInput = ({
  dropdownList,
  name,
  setValue,
  onChange,
  limit,
}: Props) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [stacks, setStacks] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    if (!dropdownList) return

    setIsShow(true)
  }, [dropdownList])

  const onClose = () => setIsShow(false)
  const onAddStack = (newStack: string) => {
    const value = stacks.length ? `${stacks},${newStack}` : newStack
    setStacks(value)
    setValue(name, value)
    setSearchValue('')
  }

  const onRemove = (stack: string) => {
    setStacks(
      stacks
        .split(',')
        .filter((i) => i !== stack)
        .join(',')
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
    if (dropdownList.length <= 0) onAddStack(searchValue)
    else onAddStack(dropdownList[0])
  }

  const hasTechStack = () =>
    stacks
      .split(',')
      .filter((i) => i.toLowerCase() === searchValue.toLowerCase())[0]

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
          disabled={limit ? stacks.split(',').length >= limit : false}
          onKeyDown={onKeyDownEnter}
          onKeyUp={onKeyUpEnter}
        />

        {!hasTechStack() && (
          <Dropdown.Menu isShow={isShow && !!searchValue} onClose={onClose}>
            {dropdownList
              ?.filter((i) => !stacks.split(',').includes(i))
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

      {!!stacks.length && (
        <S.Tags>
          {stacks.trim() &&
            stacks.split(',').map((i, idx) => (
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
