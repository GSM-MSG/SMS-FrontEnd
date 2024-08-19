import { useQuery } from '@tanstack/react-query'
import majorListService from '@features/register/services/majorListService'

const useMajorListQuery = () => {
  return useQuery({
    queryKey: ['majorList'],
    queryFn: majorListService,
  })
}

export default useMajorListQuery
