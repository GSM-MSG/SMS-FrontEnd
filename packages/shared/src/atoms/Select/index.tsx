import { ReactNode, useEffect, useRef, useState } from 'react'
import { Context, InitialValue } from './Context'
import { SelectContent } from './SelectContent'
import { SelectItem } from './SelectItem'
import { SelectTrigger } from './SelectTrigger'
import SelectValue from './SelectValue'
import * as S from './style'

interface Props extends Partial<InitialValue> {
  children?: ReactNode | ReactNode[]
  label?: undefined
  onLabelChange?: undefined
}

const Select = ({ children, ...props }: Props) => {
  const [open, setOpen] = useState(props.defaultOpen ?? false)
  const [value, setValue] = useState<string | undefined>(props.defaultValue)
  const [label, setLabel] = useState<string>()
  const ref = useRef<HTMLDivElement>(null)

  const onOpenChange = (open: boolean) => setOpen(open)
  const onValueChange = (value: string) => setValue(value)
  const onLabelChange = (label: string) => setLabel(label)

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (e.target instanceof Node && !ref.current?.contains(e.target))
        onOpenChange(false)
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [open])

  return (
    <Context.Provider
      value={{
        ...props,
        open: props.open ? props.open : open,
        onOpenChange: props.onOpenChange ? props.onOpenChange : onOpenChange,
        value: props.value ? props.value : value,
        onValueChange: props.onValueChange
          ? props.onValueChange
          : onValueChange,
        label,
        onLabelChange,
      }}
    >
      <S.Root ref={ref}>{children}</S.Root>
    </Context.Provider>
  )
}

Select.Root = Select
Select.SelectContent = SelectContent
Select.SelectItem = SelectItem
Select.SelectTrigger = SelectTrigger
Select.SelectValue = SelectValue

export default Select
