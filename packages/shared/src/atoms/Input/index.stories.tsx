import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import * as Icon from '../../icons'
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
    leftIcon: <Icon.Search />,
    rightIcon: <Icon.Folder />,
  },
}
