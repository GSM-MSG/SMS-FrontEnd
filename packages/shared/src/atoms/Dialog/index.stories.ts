import { Meta, StoryObj } from '@storybook/react'
import Dialog from './index'

const config: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,

  args: {
    title: 'Test',
    content: 'This is Test',
    cancelText: '취소',
    confirmText: '확인',
  },
}

export default config

type Story = StoryObj<typeof Dialog>

export const Primary: Story = { args: {} }
