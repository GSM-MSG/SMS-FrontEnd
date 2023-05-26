import { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import Select from './index'
import type { OptionsType } from './type'

const options = [
  'hi',
  'hello',
  'woeijfwoiefjweoijf',
  'jfowejfowiejfowjgoh',
  'not',
  'ur',
  'wefoijoi',
  'friends',
  'wefohijof',
  'fwowefjw',
  'woefjweoijf',
].reduce((pre, cur) => {
  pre[cur] = cur
  return pre
}, {} as OptionsType)

const config: Meta<typeof Select> = {
  title: 'Select',
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
      />
      <button type='submit'>submit</button>
    </form>
  )
}
