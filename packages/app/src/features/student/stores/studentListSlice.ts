import StudentType from '@features/student/types/StudentType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  studentList: StudentType[]
  totalSize: number
}

const initialState: InitialState = {
  studentList: [],
  totalSize: 0,
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
    setTotalSize: (state, { payload }: PayloadAction<number | undefined>) => {
      state.totalSize = payload || 0
    },
  },
})

export const { addStudents, resetStudents, setTotalSize } =
  studentListSlice.actions

export default studentListSlice
