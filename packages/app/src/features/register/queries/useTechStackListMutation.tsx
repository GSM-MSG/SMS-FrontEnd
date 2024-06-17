import { useMutation } from '@tanstack/react-query'
import techStackListService from '@features/register/services/techStackListService'

const useTechStackListMutation = () => {
  return useMutation({
    mutationKey: ['techStackList'],
    mutationFn: techStackListService,
  })
}

export default useTechStackListMutation
