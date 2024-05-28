import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SegmentedControl from './index'

const config: Meta<typeof SegmentedControl> = {
  title: 'SegmentedControl',
  component: SegmentedControl,
  args: {
    text1: 'True',
    text2: 'False',
    isTrue: true,
  },
}

export default config

type Story = StoryObj<typeof SegmentedControl>

export const Primary: Story = {
  render: (args) => {
    const [isTrue, setIsTrue] = useState(args.isTrue)

    const handleClick = () => {
      setIsTrue(!isTrue)
    }

    return (
      <div onClick={handleClick}>
        <SegmentedControl
          text1={args.text1}
          text2={args.text2}
          isTrue={isTrue}
        />
      </div>
    )
  },
  args: {
    text1: 'True',
    text2: 'False',
    isTrue: true,
  },
}
