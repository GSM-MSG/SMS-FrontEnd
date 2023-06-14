import { Meta, StoryObj } from '@storybook/react'
import Checkbox from './index'

const config: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,

  args: {},
}

export default config

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = { args: {} }
