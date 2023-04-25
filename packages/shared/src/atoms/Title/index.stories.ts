import { Meta, StoryObj } from '@storybook/react'
import Title from './index'

const config: Meta<typeof Title> = {
  title: 'Title',
  component: Title,
  args: {
    children: '학생 정보 통합관리 서비스',
  },
}

export default config

type Story = StoryObj<typeof Title>

export const Title1: Story = {}

export const Title2: Story = {
  args: {
    type: 'title2',
  },
}
