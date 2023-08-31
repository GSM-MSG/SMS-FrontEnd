import { useCallback, useEffect, useState } from 'react'

const useLocalStorage = (
  key: string,
  initialValue: string
): [string, (value: string) => void] => {
  const [storedValue, setStoredValue] = useState<string>(initialValue)

  useEffect(() => {
    try {
      const item = localStorage.getItem(key)
      item && setStoredValue(item)
    } catch (e) {
      console.error(e)
    }
  }, [storedValue])

  const setValue = useCallback(
    (value: string) => {
      try {
        localStorage.setItem(key, value)
        setStoredValue(value)
      } catch (e) {
        console.error(e)
      }
    },
    [key]
  )

  return [storedValue, setValue]
}

export default useLocalStorage
