import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Search from '../../icons/Search'
import Input from './index'

const config: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: { placeholder: 'Text' },
}

export default config

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    icon: <Search />,
  },
}
