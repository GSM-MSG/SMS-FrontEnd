import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Search from '../../icons/Search'
import File from '../../icons/File'
import Input from './index'

const config: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: { placeholder: 'Text', error: 'Error' },
}

export default config

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    leftIcon: <Search />,
    rightIcon: <File />,
  },
}
