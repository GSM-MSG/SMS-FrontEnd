import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  param: StudentParam
  nextStop: boolean
  isLoading: boolean
  page: number
  isReady: boolean
  size: number
  isError: boolean
}

const initialState: InitialState = {
  param: {
    grade: [],
    majors: [],
    classNum: [],
    department: [],
    techStacks: [],
    formOfEmployment: [],
  },
  page: 2,
  size: 20,
  isLoading: false,
  isReady: false,
  nextStop: false,
  isError: false,
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
    resetPage: (state) => {
      state.page = 1
      state.nextStop = false
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setParam: (state, { payload }: PayloadAction<StudentParam>) => {
      state.param = {
        ...initialState.param,
        ...payload,
      }
      state.isReady = true
    },
    setIsError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload
    },
  },
})

export const {
  nextPage,
  setParam,
  nextStop,
  setLoading,
  resetPage,
  setIsError,
} = studentParamSlice.actions

export default studentParamSlice
