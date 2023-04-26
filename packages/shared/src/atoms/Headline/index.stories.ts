import { Meta, StoryObj } from '@storybook/react'
import Headline from './index'

const config: Meta<typeof Headline> = {
  title: 'Headline',
  component: Headline,
  args: {
    children: 'STUDENT\nMANAGEMENT SERVICE',
  },
}

export default config

type Story = StoryObj<typeof Headline>

export const Headline1: Story = {}

export const Headline2: Story = {
  args: {
    type: 'headline2',
  },
}

export const Headline3: Story = {
  args: {
    type: 'headline3',
  },
}
