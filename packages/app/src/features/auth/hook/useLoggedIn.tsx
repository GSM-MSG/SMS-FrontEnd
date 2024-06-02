import loggedInApi from '@features/auth/service/loggedInApi'

interface Props {
  redirectTo?: string
  redirectToIfFound?: string
}

const useLoggedIn = ({}: Props) => {
  const { data, isSuccess } = loggedInApi.useLoggedInQuery()
  const [refetchLoggedIn] = loggedInApi.useRefetchLoggedInMutation()

  return {
    ...data,
    refetchLoggedIn,
    isSuccess,
  }
}

export default useLoggedIn
