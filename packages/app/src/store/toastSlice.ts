import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ToastType {
  id: symbol
  comment: string
  type: 'success' | 'error'
  milliseconds: number
}

const initialState: ToastType[] = []

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, { payload }: PayloadAction<ToastType>) => {
      state.push(payload)
    },
    removeToast: (state, { payload }: PayloadAction<symbol>) => {
      state = state.filter((i) => i.id !== payload)
      return state
    },
  },
})

export const { addToast, removeToast } = toastSlice.actions

export default toastSlice
