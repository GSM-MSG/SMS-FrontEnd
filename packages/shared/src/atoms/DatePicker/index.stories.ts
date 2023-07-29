import { Meta, StoryObj } from '@storybook/react'
import DatePicker from './index'

const config: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,

  args: {},
}

export default config

type Story = StoryObj<typeof DatePicker>

export const Primary: Story = { args: {} }
