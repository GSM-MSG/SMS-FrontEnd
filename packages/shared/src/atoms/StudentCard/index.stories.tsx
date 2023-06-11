import { Meta, StoryObj } from '@storybook/react'
import StudentCard from './index'

const config: Meta<typeof StudentCard> = {
  title: 'StudentCard',
  component: StudentCard,
}

export default config

type Story = StoryObj<typeof StudentCard>

export const Primary: Story = {
  args: {
    name: '최형우',
    profileImgUrl: 'https://t.ly/WvpI1',
    major: 'Jsp Developer',
    techStack: ['jsp', 'java'],
  },
}