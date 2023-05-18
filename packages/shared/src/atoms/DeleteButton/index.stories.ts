import { Meta, StoryObj } from '@storybook/react'
import DeleteButton from './index'

const config: Meta<typeof DeleteButton> = {
  title: 'DeleteButton',
  component: DeleteButton,

  args: {},
}

export default config

type Story = StoryObj<typeof DeleteButton>

export const Primary: Story = { args: {} }
