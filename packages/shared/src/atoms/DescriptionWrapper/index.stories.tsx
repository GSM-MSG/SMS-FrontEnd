import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DescriptionWrapper from './index'

const config: Meta<typeof DescriptionWrapper> = {
  title: 'DescriptionWrapper',
  component: DescriptionWrapper,
  args: {},
}

export default config

type Story = StoryObj<typeof DescriptionWrapper>

export const Primary: Story = {
  args: {
    children: <input />,
  },
}
