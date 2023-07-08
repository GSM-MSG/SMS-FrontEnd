import React from 'react'
import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import MultiRangeSlider from './index'

const config: Meta<typeof MultiRangeSlider> = {
  title: 'MultiRangeSlider',
  component: MultiRangeSlider,

  args: {},
}

export default config

interface FormType {
  rangeMin: number
  rangeMax: number
}

export const Primary = () => {
  const { watch, setValue, handleSubmit, reset } = useForm<FormType>({
    defaultValues: {
      rangeMax: 1000,
      rangeMin: 0,
    },
  })

  const onSubmit = handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit}>
      <MultiRangeSlider
        min={0}
        max={1000}
        minValue={watch('rangeMin')}
        maxValue={watch('rangeMax')}
        onChangeMax={(max) => setValue('rangeMax', max)}
        onChangeMin={(min) => setValue('rangeMin', min)}
      />
      <button type='button' onClick={() => reset()}>
        reset
      </button>
    </form>
  )
}
