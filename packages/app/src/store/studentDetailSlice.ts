import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState extends StudentDetail {
  id?: string
}

const initialState: Partial<InitialState> = {}

const studentDetailSlice = createSlice({
  name: 'studentDetail',
  initialState,
  reducers: {
    setStudentId: (state, { payload }: PayloadAction<string>) => {
      state.id = payload
    },
    setStudent: (state, { payload }: PayloadAction<StudentDetail>) => {
      state = {
        id: state.id,
        ...payload,
      }
      return state
    },
    clearStudent: (state) => {
      state = initialState
      return state
    },
  },
})

export const { setStudent, setStudentId, clearStudent } =
  studentDetailSlice.actions

export default studentDetailSlice
