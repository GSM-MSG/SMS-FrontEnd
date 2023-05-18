import { Meta, StoryObj } from '@storybook/react'
import Chip from './index'

const config: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,

  args: { children: 'Text' },
}

export default config

type Story = StoryObj<typeof Chip>

export const Primary: Story = { args: {} }
