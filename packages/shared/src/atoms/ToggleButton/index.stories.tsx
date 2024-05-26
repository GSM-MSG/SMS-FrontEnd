import { Meta, StoryObj } from '@storybook/react'
import ToggleButton from './index'

const config: Meta<typeof ToggleButton> = {
  title: 'ToggleButton',
  component: ToggleButton,
  args: { text1: 'True', text2: 'False' },
}

export default config

type Story = StoryObj<typeof ToggleButton>

export const Primary: Story = {}