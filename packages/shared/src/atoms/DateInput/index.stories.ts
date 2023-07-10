import { Meta, StoryObj } from '@storybook/react'
import DateInput from './index'

const config: Meta<typeof DateInput> = {
  title: 'DateInput',
  component: DateInput,

  args: {},
}

export default config

type Story = StoryObj<typeof DateInput>

export const Primary: Story = { args: {} }
