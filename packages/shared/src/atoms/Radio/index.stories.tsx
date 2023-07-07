import React from 'react'
import { Meta } from '@storybook/react'
import Radio from './index'

const config: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  args: { placeholder: 'Text' },
}

export default config

export const Primary = () => {
  return (
    <form>
      <Radio label='hello' />
      <Radio label='world' />
    </form>
  )
}
