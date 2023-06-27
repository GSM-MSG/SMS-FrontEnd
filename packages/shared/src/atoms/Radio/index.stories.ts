import { Meta, StoryObj } from '@storybook/react'
import Radio from './index'

const config: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  args: { placeholder: 'Text', label: 'hello world' },
}

export default config

type Story = StoryObj<typeof Radio>

export const Primary: Story = {}
