import { createContext } from 'react'

interface InitialValue {
  isHidden: boolean
  setIsHidden: (value: boolean) => void
}

export const Context = createContext<InitialValue>({
  isHidden: true,
  setIsHidden: () => {},
})
