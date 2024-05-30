import { ReactNode, createContext, useState } from 'react'

interface ContextType {
  hidden: boolean
  setHidden: (value: boolean) => void
}

export const Context = createContext<ContextType>({
  hidden: false,
  setHidden() {},
})

interface Props {
  children: ReactNode
}

export const ContextProvider = ({ children }: Props) => {
  const [hidden, setHidden] = useState(false)

  return (
    <Context.Provider value={{ hidden, setHidden }}>
      {children}
    </Context.Provider>
  )
}
