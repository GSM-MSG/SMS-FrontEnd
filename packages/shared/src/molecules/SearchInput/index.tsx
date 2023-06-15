import { ChangeEvent, useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { Input, Dropdown, Tag } from '../../atoms'
import { Search } from '../../icons'
import * as S from './style'

interface Props {
  name: string
  dropdownList: string[]
  setValue: UseFormSetValue<any>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ dropdownList, name, setValue, onChange }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [stacks, setStacks] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    if (!dropdownList || !dropdownList.length) return

    setIsShow(true)
  }, [dropdownList])

  const onClose = () => setIsShow(false)
  const onClick = (newStack: string) => {
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

  return (
    <div>
      <S.Wrapper>
        <Input
          placeholder='찾고 싶은 세부 스택 입력'
          icon={<Search />}
          onChange={changeHandler}
          value={searchValue}
          onReset={() => setSearchValue('')}
        />
        <Dropdown.Menu isShow={isShow && !!searchValue} onClose={onClose}>
          {dropdownList?.map((i, idx) => (
            <Dropdown.Item onClick={() => onClick(i)} key={idx}>
              {i}
            </Dropdown.Item>
          ))}
          <Dropdown.Item onClick={() => onClick(searchValue)}>
            {`+ "${searchValue}" 직접 추가하기`}
          </Dropdown.Item>
        </Dropdown.Menu>
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
