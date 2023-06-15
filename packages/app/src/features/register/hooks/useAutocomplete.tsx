import { ChangeEvent, useEffect, useState } from 'react'
import autocompleteApi from '@features/register/services/autocompleteApi'

/**
 * techStack input에서 사용될 hook입니다
 */
const useAutocomplete = () => {
  const [stack, setStack] = useState<string>('')
  const [dropdownList, setDropdownList] = useState<string[]>([])
  const [mutation] = autocompleteApi.useTechStackMutation()

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStack(e.target.value)

  useEffect(() => {
    setDropdownList([])
    if (!stack) return

    const delayFetch = setTimeout(async () => {
      const res = await mutation(stack)
      if ('error' in res) return

      setDropdownList([...res.data.techStack])
    }, 400)

    return () => clearTimeout(delayFetch)
  }, [stack])

  return { onChange, dropdownList }
}

export default useAutocomplete
