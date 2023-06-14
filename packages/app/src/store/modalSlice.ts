import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    onShow: (state) => {
      state = true
      return state
    },
    onClose: (state) => {
      state = false
      return state
    },
  },
})

export const { onClose, onShow } = modalSlice.actions

export default modalSlice
