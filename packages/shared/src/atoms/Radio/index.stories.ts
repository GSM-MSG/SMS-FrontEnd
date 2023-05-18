import { Meta, StoryObj } from '@storybook/react'
import Radio from './index'

const config: Meta<typeof Radio> = {
  title: 'Selection Controls',
  component: Radio,
  args: { placeholder: 'Text' },
}

export default config

type Story = StoryObj<typeof Radio>

export const Primary: Story = {}
