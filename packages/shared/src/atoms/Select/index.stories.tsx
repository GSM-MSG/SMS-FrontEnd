import React from 'react'
import { Meta } from '@storybook/react'
import Select from './index'

const config: Meta<typeof Select> = {
  title: 'NewSelect',
  component: Select,
  args: {},
}

export default config

export const Primary = () => {
  return (
    <Select.Root defaultValue='apple'>
      <Select.SelectTrigger>
        <Select.SelectValue placeholder='hello world' />
      </Select.SelectTrigger>
      <Select.SelectContent>
        <Select.SelectItem value='apple'>Apple</Select.SelectItem>
        <Select.SelectItem value='banana'>Banana</Select.SelectItem>
        <Select.SelectItem value='blueberry'>Blueberry</Select.SelectItem>
        <Select.SelectItem value='grapes'>Grapes</Select.SelectItem>
        <Select.SelectItem value='pineapple'>Pineapple</Select.SelectItem>
        <Select.SelectItem value='raspberry-pi'>Raspberry Pi</Select.SelectItem>
      </Select.SelectContent>
    </Select.Root>
  )
}
