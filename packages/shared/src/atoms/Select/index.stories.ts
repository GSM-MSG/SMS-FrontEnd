import { Meta, StoryObj } from '@storybook/react'
import Select from './index'

const config: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  args: {
    name: 'hi',
    register: () => {},
    options: [
      'hi',
      'hello',
      'woeijfwoiefjweoijf',
      'jfowejfowiejfowjgoh',
      'not',
      'ur',
      'wefoijoi',
      'friends',
      'wefohijof',
      'fwowefjw',
      'woefjweoijf',
    ],
  },
}

export default config

type Story = StoryObj<typeof Select>

export const Primary: Story = {}
