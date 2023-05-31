import { Meta } from '@storybook/react'
import React from 'react'
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

  const onSubmit = handleSubmit(console.log)

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        name='search'
        setValue={setValue}
        dropdownList={['hello', 'hi']}
      />
      <button type='submit'>submit</button>
    </form>
  )
}
