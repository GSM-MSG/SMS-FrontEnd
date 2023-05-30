import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import Dropdown from './index'

export const Primary = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setIsShow(true)}>open</button>
      <div style={{ position: 'relative' }}>
        <Dropdown.Menu isShow={isShow} onClose={() => setIsShow(false)}>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
          <Dropdown.Item>hello</Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </>
  )
}

const config: Meta = {
  title: 'DropDown',
  component: Primary,
  args: {},
}

export default config
