import { Meta, StoryObj } from '@storybook/react'
import StudentCardSekelton from './StudentCardSkeleton'
import StudentCardSkeleton from './StudentCardSkeleton'

const config: Meta<typeof StudentCardSkeleton> = {
  title: 'StudentCardSkeleton',
  component: StudentCardSekelton,
}

export default config

type Story = StoryObj<typeof StudentCardSkeleton>

export const Primary: Story = {}
