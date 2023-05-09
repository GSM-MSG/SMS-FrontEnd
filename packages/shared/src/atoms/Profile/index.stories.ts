import { Meta, StoryObj } from '@storybook/react'
import Profile from './index'

const config: Meta<typeof Profile> = {
  title: 'Profile',
  component: Profile,
}

export default config

type Story = StoryObj<typeof Profile>

export const Primary: Story = { args: { error: 'Error' } }
