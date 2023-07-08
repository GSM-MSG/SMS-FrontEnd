import { Meta } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import SearchInput from './index'

const config: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
  args: {},
}

export default config

interface FormType {
  search: string
}

export const Primary = () => {
  const { setValue, handleSubmit } = useForm<FormType>()
  const [dropdownInput, setDropdownInput] = useState<string>('')
  const [dropdownList, setDropdownList] = useState<string[]>([])

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      setDropdownList([...dropdownList, 'world'])
    }, 300)

    return () => clearTimeout(delayFetch)
  }, [dropdownInput])

  const onSubmit = handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        name='search'
        setValue={setValue}
        dropdownList={dropdownList}
        onChange={(e) => setDropdownInput(e.target.value)}
        defaultValue={['hello', 'hi']}
      />
      <button type='submit'>submit</button>
    </form>
  )
}
