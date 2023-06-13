import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  param: StudentParam
  nextStop: boolean
}

const initialState: InitialState = {
  param: {
    page: 1,
    size: 10,
  },
  nextStop: false,
}

const studentParamSlice = createSlice({
  name: 'studentParam',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.nextStop) return
      state.param.page += 1
    },
    nextStop: (state) => {
      state.nextStop = true
    },
    setParam: (
      state,
      { payload }: PayloadAction<Omit<StudentParam, 'page' | 'size'>>
    ) => {
      state.param = {
        ...payload,
        page: state.param.page,
        size: state.param.size,
      }
    },
  },
})

export const { nextPage, setParam, nextStop } = studentParamSlice.actions

export default studentParamSlice
