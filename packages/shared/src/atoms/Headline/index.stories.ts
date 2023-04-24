import { Meta, StoryObj } from '@storybook/react'
import Headline from './index'

const config: Meta<typeof Headline> = {
  title: 'Headline',
  component: Headline,
}

export default config

type Story = StoryObj<typeof Headline>

export const Headline1: Story = {
  args: {
    children: 'STUDENT\nMANAGEMENT SERVICE',
  },
}

export const Headline2: Story = {
  args: {
    children: 'STUDENT\nMANAGEMENT SERVICE',
    type: 'headline2',
  },
}

export const Headline3: Story = {
  args: {
    children: 'STUDENT\nMANAGEMENT SERVICE',
    type: 'headline3',
  },
}
