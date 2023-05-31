import { ChangeEvent, useEffect, useState } from 'react'

/**
 * techStack input에서 사용될 hook입니다
 */
const useAutocomplete = () => {
  const [stack, setStack] = useState<string>('')
  const [dropdownList, setDropdownList] = useState<string[]>([])

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStack(e.target.value)

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      setDropdownList([...dropdownList, 'world'])
    }, 300)

    return () => clearTimeout(delayFetch)
  }, [stack])

  return { onChange, dropdownList }
}

export default useAutocomplete
