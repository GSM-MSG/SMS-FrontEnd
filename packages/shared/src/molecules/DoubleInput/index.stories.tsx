import { Meta, StoryObj } from '@storybook/react'
import DoubleInput from './index'

const config: Meta<typeof DoubleInput> = {
  title: 'DoubleInput',
  component: DoubleInput,
}

export default config

type Story = StoryObj<typeof DoubleInput>

export const Primary: Story = {
  args: {
    titlePlaceholder: 'hello world',
    contentPlaceholder: 'hi',
    onDelete: () => {},
  },
}
