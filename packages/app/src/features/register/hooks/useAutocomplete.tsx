import { ChangeEvent, useEffect, useState } from 'react'
import useTechStackListMutation from '@features/register/queries/useTechStackListMutation'

/**
 * techStack input에서 사용될 hook입니다
 */
const useAutocomplete = () => {
  const { mutate, data } = useTechStackListMutation()
  const [stack, setStack] = useState<string>('')
  const [dropdownList, setDropdownList] = useState<string[]>([])

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStack(e.target.value)

  useEffect(() => {
    setDropdownList([])
    if (!stack) return

    const delayFetch = setTimeout(async () => {
      mutate(stack)
      if (!data?.techStacks) return

      setDropdownList([...data.techStacks])
    }, 300)

    return () => clearTimeout(delayFetch)
  }, [stack])

  return { onChange, dropdownList }
}

export default useAutocomplete
