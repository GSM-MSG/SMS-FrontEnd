import { useContext, useEffect, useId } from 'react'
import * as S from './style'
import { Context } from './Context'

interface Props {
  children: string
  value: string
  name?: string
}

export const SelectItem = ({ children, value, name }: Props) => {
  const id = useId()
  const {
    value: innerValue,
    onValueChange,
    onOpenChange,
    onLabelChange,
    disabled,
    defaultValue,
  } = useContext(Context)

  const handleClick = () => {
    onValueChange(value)
    onLabelChange(children)
    onOpenChange(false)
  }

  useEffect(() => {
    if (defaultValue === value) onLabelChange(children)
  }, [])

  return (
    <>
      <input
        readOnly
        disabled={disabled}
        type='radio'
        hidden
        name={name}
        value={value}
        checked={value === innerValue}
        id={id}
        onClick={handleClick}
      />
      <S.SelectItem htmlFor={id}>{children}</S.SelectItem>
    </>
  )
}
