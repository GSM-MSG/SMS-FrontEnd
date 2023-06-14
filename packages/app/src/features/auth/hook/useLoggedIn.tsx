import loggedInApi from '@features/auth/service/loggedInApi'

const useLoggedIn = () => {
  const { data, isSuccess } = loggedInApi.useLoggedInQuery()

  return {
    isExist: data?.isExist,
    isSuccess,
  }
}

export default useLoggedIn
