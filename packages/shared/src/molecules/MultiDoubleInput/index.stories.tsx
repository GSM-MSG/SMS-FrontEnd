import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import MultiDoubleInput from './index'

const config: Meta<typeof MultiDoubleInput> = {
  title: 'MultiDoubleInput',
  component: MultiDoubleInput,
}

export default config

interface FormType {
  item: {
    languageCertificateName: string
    score: string
  }
}

export const Primary = () => {
  const { register, control, handleSubmit } = useForm<FormType>()

  const onSubmit = (_form: FormType) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MultiDoubleInput
        name={'item' as const}
        register={register}
        control={control}
      />
      <button type='submit'>submit</button>
    </form>
  )
}
