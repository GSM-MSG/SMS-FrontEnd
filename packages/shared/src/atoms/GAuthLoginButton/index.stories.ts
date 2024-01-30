import { Meta, StoryObj } from '@storybook/react'
import GAuthLoginButton from './index'

const config: Meta<typeof GAuthLoginButton> = {
  title: 'GAuth login button',
  component: GAuthLoginButton,
}

export default config

type Story = StoryObj<typeof GAuthLoginButton>

export const Primary: Story = {}
