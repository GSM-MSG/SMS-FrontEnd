import { SEO } from '@components'
import NotFound from '@components/NotFound'

const NotFoundPage = () => {
  return (
    <>
      <SEO title='페이지를 찾을 수 없습니다' />
      <NotFound />
    </>
  )
}

export default NotFoundPage
