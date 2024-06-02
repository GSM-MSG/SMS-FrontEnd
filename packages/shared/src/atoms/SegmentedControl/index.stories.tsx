import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SegmentedControl from './index'

const config: Meta<typeof SegmentedControl> = {
  title: 'SegmentedControl',
  component: SegmentedControl,
  args: {
    text1: 'True',
    text2: 'False',
  },
}

export default config

type Story = StoryObj<typeof SegmentedControl>

export const Primary: Story = {
  render: (args) => {
    return (
      <div>
        <SegmentedControl text1={args.text1} text2={args.text2} />
      </div>
    )
  },
  args: {
    text1: 'True',
    text2: 'False',
  },
}
