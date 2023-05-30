import { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import Select from './index'
import type { OptionsType } from './type'

const options: OptionsType = {
  안녕: 'hello',
  세상: 'world',
  하이: 'hi',
}

const config: Meta<typeof Select> = {
  title: 'Select2',
  component: Select,
  args: {
    name: 'hi',
    register: () => {},
    options,
  },
}

export default config

interface FormType {
  select: string
}

export const Primary = () => {
  const { register, handleSubmit, control } = useForm<FormType>()

  const onSubmit = handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit}>
      <Select
        name='select'
        register={register}
        options={options}
        control={control}
        directInput
      />
      <button type='submit'>submit</button>
    </form>
  )
}
