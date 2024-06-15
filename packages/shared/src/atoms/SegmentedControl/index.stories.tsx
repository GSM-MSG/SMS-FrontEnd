import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SegmentedControl from './index'

const config: Meta<typeof SegmentedControl> = {
  title: 'SegmentedControl',
  args: {},
}

export default config

type Story = StoryObj<typeof SegmentedControl>

export const Primary: Story = {
  render: () => {
    return (
      <SegmentedControl.Root>
        <SegmentedControl.Option value='hi'>hi</SegmentedControl.Option>
        <SegmentedControl.Option value='hello'>hello</SegmentedControl.Option>
      </SegmentedControl.Root>
    )
  },
  args: {},
}
