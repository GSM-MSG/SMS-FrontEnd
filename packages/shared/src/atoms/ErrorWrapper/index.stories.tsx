import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ErrorWrapper from './index'

const config: Meta<typeof ErrorWrapper> = {
  title: 'ErrorWrapper',
  component: ErrorWrapper,
  args: {},
}

export default config

type Story = StoryObj<typeof ErrorWrapper>

export const Primary: Story = {
  args: {
    error: 'Error',
    children: <input />,
  },
}
