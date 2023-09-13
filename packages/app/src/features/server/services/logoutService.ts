import serverApi from '@api/serverApi'

const logoutService = async (accessToken: string, refreshToken: string) => {
  return serverApi.delete(`/auth`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Refresh_Token: refreshToken,
    },
  })
}

export default logoutService
