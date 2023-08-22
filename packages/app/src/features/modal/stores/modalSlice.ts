import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ReactElement } from 'react'

interface InitialState {
  name: string | null
  value: boolean

  element: ReactElement | null
  props?: object
}

const initialState: InitialState = { name: null, value: false, element: null }

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, { payload }: PayloadAction<ReactElement>) => {
      state.element = payload
    },
    close: (state) => {
      state.element = null
    },
  },
})

export const { close, show } = modalSlice.actions

export default modalSlice
