import { Meta, StoryObj } from '@storybook/react'
import ImageInput from './index'

const config: Meta<typeof ImageInput> = {
  title: 'ImageInput',
  component: ImageInput,
  args: {
    onChange: (e) => {
      if (!e.target.files || !e.target.files[0]) return ''

      return URL.createObjectURL(e.target.files[0])
    },
  },
}

export default config

type Story = StoryObj<typeof ImageInput>

export const Headline1: Story = {}
