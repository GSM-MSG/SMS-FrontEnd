import { useRouter } from 'next/router'

const useMyPage = () => {
  const router = useRouter()
  const redirectMyPage = () => {
    router.push('/mypage')
  }

  return {
    redirectMyPage,
  }
}

export default useMyPage
