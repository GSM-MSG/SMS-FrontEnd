import { saveAs } from 'file-saver'

const useFileDownloader = () => {
  const onChange = async (fileUrl: string, name: string) => {
    const fileType = fileUrl.split('.').at(-1)

    saveAs(fileUrl, `${name}-dreambook.${fileType}`)
  }

  return { onChange }
}

export default useFileDownloader
