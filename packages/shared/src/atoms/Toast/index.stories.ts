import { Meta, StoryObj } from '@storybook/react'
import Toast from './index'

const config: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  args: {
    comment:
      'Test iwjfowjfiwjfoijwe ijfoiwj wioej wijeo fojij weij fij iof eji jefwij weoij feiowj fewioj ij iowje ifjw',
  },
}

export default config

type Story = StoryObj<typeof Toast>

export const Primary: Story = {}
