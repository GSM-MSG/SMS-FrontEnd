import { createContext } from 'react'

export interface InitialValue {
  defaultValue?: string
  value?: string
  onValueChange: (value: string) => void
  defaultOpen?: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  label?: string
  onLabelChange: (label: string) => void
  onBlur?: () => void
  name?: string
  disabled?: boolean
  required?: boolean
}

export const Context = createContext<InitialValue>({
  open: true,
  onOpenChange: () => {},
  onValueChange: () => {},
  onLabelChange: () => {},
})
