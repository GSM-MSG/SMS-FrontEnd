import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ErrorMessage from './index'

const config: Meta<typeof ErrorMessage> = {
  title: 'ErrorMessage',
  component: ErrorMessage,
  args: {},
}

export default config

type Story = StoryObj<typeof ErrorMessage>

export const Primary: Story = {
  args: {
    error: 'Error',
    children: <input />,
  },
}
