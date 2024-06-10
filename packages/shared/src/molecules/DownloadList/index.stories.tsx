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
      <DownloadList.File filename='아주긴_제목을_가진_책의_독후감_양식_파일_이름이_매우_길어서_서비스를_만들_때_긴_이름이_들어간_케이스를_표시할_때_사용할 수 있는_예시_파일.docx' />
      <DownloadList.File filename='테스트_파일.txt' />
    </DownloadList>
  )
}
