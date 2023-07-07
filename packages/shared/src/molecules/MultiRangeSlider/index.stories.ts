import { Meta, StoryObj } from '@storybook/react'
import MultiRangeSlider from './index'

const config: Meta<typeof MultiRangeSlider> = {
  title: 'MultiRangeSlider',
  component: MultiRangeSlider,

  args: {
    min: 0,
    max: 1000,
    maxDefaultValue: 900,
    minDefaultValue: 10,
  },
}

export default config

type Story = StoryObj<typeof MultiRangeSlider>

export const Primary: Story = { args: {} }
