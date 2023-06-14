import { Meta, StoryObj } from '@storybook/react'
import Header from './index'

const config: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
}

export default config

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: { isLoggedIn: false },
}
