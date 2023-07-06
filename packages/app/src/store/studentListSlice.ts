import StudentType from '@features/student/types/StudentType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: StudentType[] = []

const studentListSlice = createSlice({
  name: 'studentList',
  initialState,
  reducers: {
    addStudents: (state, { payload }: PayloadAction<StudentType[]>) => {
      state = [...state, ...payload]
    },
    resetStudents: (state) => {
      state = []
      return state
    },
  },
})

export const { addStudents, resetStudents } = studentListSlice.actions

export default studentListSlice
