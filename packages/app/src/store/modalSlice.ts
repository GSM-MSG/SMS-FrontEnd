import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  name: string | null
  value: boolean
}

const initialState: InitialState = { name: null, value: false }

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onShow: (state, { payload }: PayloadAction<string>) => {
      state = {
        name: payload,
        value: true,
      }
      return state
    },
    onClose: (state) => {
      state = {
        name: null,
        value: true,
      }
      return state
    },
  },
})

export const { onClose, onShow } = modalSlice.actions

export default modalSlice
