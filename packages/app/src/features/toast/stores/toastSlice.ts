import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ToastType {
  id: symbol
  comment: string
  type: 'success' | 'error'
  milliseconds: number
  isHidden: boolean
}

const initialState: ToastType[] = []

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (
      state,
      { payload }: PayloadAction<Omit<ToastType, 'isHidden'>>
    ) => {
      state.push({ ...payload, isHidden: false })
    },
    hideToast: (state, { payload }: PayloadAction<symbol>) => {
      return state.map((i) => {
        if (i.id === payload) return { ...i, isHidden: true }
        return i
      })
    },
    removeToast: (state, { payload }: PayloadAction<symbol>) => {
      return state.filter((i) => i.id !== payload)
    },
  },
})

export const { addToast, removeToast, hideToast } = toastSlice.actions

export default toastSlice
