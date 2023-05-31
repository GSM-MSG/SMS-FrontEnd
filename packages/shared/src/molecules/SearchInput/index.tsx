import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { Input, Dropdown, Tag } from '../../atoms'
import { Search } from '../../icons'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  dropdownList: string[]
  setValue: UseFormSetValue<any>
}

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ dropdownList, name, setValue, ...props }, ref) => {
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
    }

    const onRemove = (stack: string) => {
      setStacks(
        stacks
          .split(',')
          .filter((i) => i !== stack)
          .join(',')
      )
    }

    return (
      <div>
        <S.Wrapper>
          <Input
            {...props}
            ref={ref}
            placeholder='찾고 싶은 세부 스택 입력'
            icon={<Search />}
            isReset
          />

          <Dropdown.Menu isShow={isShow} onClose={onClose}>
            {dropdownList?.map((i, idx) => (
              <Dropdown.Item onClick={() => onClick(i)} key={idx}>
                {i}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </S.Wrapper>

        <S.Tags>
          {stacks.trim() &&
            stacks.split(',').map((i, idx) => (
              <Tag key={idx} onRemove={() => onRemove(i)}>
                {i}
              </Tag>
            ))}
        </S.Tags>
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
