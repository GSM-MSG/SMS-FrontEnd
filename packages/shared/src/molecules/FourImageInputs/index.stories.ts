import { Meta, StoryObj } from '@storybook/react'
import FourImageInputs from './index'

const config: Meta<typeof FourImageInputs> = {
  title: 'FourImageInputs',
  component: FourImageInputs,
  args: {
    onChange: (e) => {
      if (!e.target.files || !e.target.files[0]) return ''

      return URL.createObjectURL(e.target.files[0])
    },
  },
}

export default config

type Story = StoryObj<typeof FourImageInputs>

export const Headline1: Story = {}
