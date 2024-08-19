import { Meta, StoryObj } from '@storybook/react'
import FileInput from './index'

const config: Meta<typeof FileInput> = {
  title: 'FileInput',
  component: FileInput,
  args: {
    error: 'Error',
    placeholder: 'Placeholder',
    onChange: (e) => e.target.files?.[0]?.name,
  },
}

export default config

type Story = StoryObj<typeof FileInput>

export const Primary: Story = {
  args: {},
}
