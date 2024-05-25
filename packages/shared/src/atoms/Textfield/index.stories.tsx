// import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
// import Search from '../../icons/Search'
import Textfield from './index'

const config: Meta<typeof Textfield> = {
  title: 'Textfield',
  component: Textfield,
  args: { placeholder: 'Text', error: 'Error' },
}

export default config

type Story = StoryObj<typeof Textfield>

export const Primary: Story = {
  args: {},
}
