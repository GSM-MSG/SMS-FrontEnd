import { useCallback, useEffect, useState } from 'react'

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = localStorage.getItem(key)
      item && setStoredValue(JSON.parse(item))
    } catch (e) {
      console.error(e)
    }
  }, [])

  const setValue = useCallback(
    (value: T) => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
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
