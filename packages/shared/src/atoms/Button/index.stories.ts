import { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const config: Meta<typeof Button> = {
  title: 'Button',
  component: Button,

  args: { children: 'Text' },
}

export default config

type Story = StoryObj<typeof Button>

export const Primary: Story = { args: {} }
