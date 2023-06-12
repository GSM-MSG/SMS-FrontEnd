import { Meta, StoryObj } from '@storybook/react'
import SearchField from './index'

const config: Meta<typeof SearchField> = {
  title: 'SearchField',
  component: SearchField,
}

export default config

type Story = StoryObj<typeof SearchField>

export const Primary: Story = {}
