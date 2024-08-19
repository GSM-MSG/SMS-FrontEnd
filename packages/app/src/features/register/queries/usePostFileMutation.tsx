import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { PostFileService } from '@features/register/services'

interface Param {
  file: File
  isImage?: boolean
}

interface Props
  extends UseMutationOptions<string | undefined, Error, Param, unknown> {}

const usePostFileMutation = ({ ...props }: Props) => {
  return useMutation({
    mutationKey: ['post-file'],
    mutationFn: ({ file, isImage }: Param) =>
      PostFileService(file, isImage ?? false),
    ...props,
  })
}

export default usePostFileMutation
