import { Meta, StoryObj } from '@storybook/react'
import MultiDateInput from './index'

const config: Meta<typeof MultiDateInput> = {
  title: 'MultiDateInput',
  component: MultiDateInput,
}

export default config

type Story = StoryObj<typeof MultiDateInput>

export const Primary: Story = {}
