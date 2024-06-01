import React from 'react'
import { Meta } from '@storybook/react'
import DownloadList from './index'

const config: Meta<typeof DownloadList> = {
  title: 'DownloadList',
  component: DownloadList,
}

export default config

export const Primary = () => {
  return (
    <DownloadList>
      <DownloadList.File filename='테스트 파일.txt' />
    </DownloadList>
  )
}
