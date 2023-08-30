import { rtkApi } from '@api'

interface Response {
  profileImgUrl: string
}

const profileImgApi = rtkApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    profileImg: build.query<Response, void>({
      query: () => ({ url: '/server/user/profile/img' }),
      providesTags: ['Profile-Image'],
    }),
    refetchProfileImg: build.mutation<Response, void>({
      query: () => ({ url: '/server/user/profile/img' }),
      invalidatesTags: ['Profile-Image'],
    }),
  }),
})

export default profileImgApi
