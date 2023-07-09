import StudentType from '@features/student/types/StudentType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  studentList: StudentType[]
  totalSize?: number
}

const initialState: InitialState = {
  studentList: [],
}

const studentListSlice = createSlice({
  name: 'studentList',
  initialState,
  reducers: {
    addStudents: (state, { payload }: PayloadAction<StudentType[]>) => {
      state.studentList = [...state.studentList, ...payload]
    },
    resetStudents: (state) => {
      state.studentList = []
    },
    setTotoalSize: (state, { payload }: PayloadAction<number>) => {
      state.totalSize = payload
    },
  },
})

export const { addStudents, resetStudents, setTotoalSize } =
  studentListSlice.actions

export default studentListSlice
