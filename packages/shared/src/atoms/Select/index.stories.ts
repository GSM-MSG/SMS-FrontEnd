import { Meta, StoryObj } from '@storybook/react'
import Select from './index'
import type { OptionsType } from './type'

const options = [
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
].reduce((pre, cur) => {
  pre[cur] = cur
  return pre
}, {} as OptionsType)

const config: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  args: {
    name: 'hi',
    register: () => {},
    options,
  },
}

export default config

type Story = StoryObj<typeof Select>

export const Primary: Story = {}
