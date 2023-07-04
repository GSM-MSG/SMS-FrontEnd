import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  param: StudentParam
  nextStop: boolean
  isLoading: boolean
  page: number
  size: number
}

const initialState: InitialState = {
  param: {},
  page: 1,
  size: 20,
  isLoading: false,
  nextStop: false,
}

const studentParamSlice = createSlice({
  name: 'studentParam',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.nextStop) return
      state.page += 1
    },
    nextStop: (state) => {
      state.nextStop = true
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setParam: (state, { payload }: PayloadAction<StudentParam>) => {
      state.param = {
        ...payload,
      }
    },
  },
})

export const { nextPage, setParam, nextStop, setLoading } =
  studentParamSlice.actions

export default studentParamSlice
