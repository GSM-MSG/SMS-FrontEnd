import { Meta, StoryObj } from '@storybook/react'
import GauthLoginButton from './index'

const config: Meta<typeof GauthLoginButton> = {
  title: 'Gauth login button',
  component: GauthLoginButton,
}

export default config

type Story = StoryObj<typeof GauthLoginButton>

export const Primary: Story = {}
