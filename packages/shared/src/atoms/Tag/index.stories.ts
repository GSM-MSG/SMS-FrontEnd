import { Meta, StoryObj } from '@storybook/react'
import Radio from './index'

const config: Meta<typeof Radio> = {
  title: 'Tag',
  component: Radio,
  args: {
    children: 'Adobe Photoshop',
  },
}

export default config

type Story = StoryObj<typeof Radio>

export const Primary: Story = {}
