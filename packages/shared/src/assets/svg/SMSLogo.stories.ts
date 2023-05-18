import { Meta, StoryObj } from '@storybook/react'
import SMSLogo from './SMSLogo'

const config: Meta<typeof SMSLogo> = {
  title: 'SMSLogo',
  component: SMSLogo,

  args: {},
}

export default config

type Story = StoryObj<typeof SMSLogo>

export const Primary: Story = { args: {} }
