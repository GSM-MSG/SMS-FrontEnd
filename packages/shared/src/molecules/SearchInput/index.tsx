import { useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { Input, Dropdown } from '../../atoms'
import { Search } from '../../icons'
import * as S from './style'

interface Props {
  name: string
  dropdownList?: string[]
  setValue: UseFormSetValue<any>
}

const SearchInput = ({ dropdownList, name, setValue }: Props) => {
  const [stack, setStack] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    if (!dropdownList || !dropdownList.length) return

    setIsShow(true)
  }, [dropdownList])

  const onClose = () => setIsShow(false)
  const onClick = (newStack: string) => {
    const value = stack.length ? `${stack},${newStack}` : newStack
    setStack(value)
    setValue(name, value)
  }

  return (
    <S.Wrapper>
      <Input placeholder='찾고 싶은 세부 스택 입력' icon={<Search />} isReset />

      <Dropdown.Menu isShow={isShow} onClose={onClose}>
        {dropdownList?.map((i, idx) => (
          <Dropdown.Item onClick={() => onClick(i)} key={idx}>
            {i}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </S.Wrapper>
  )
}

export default SearchInput
