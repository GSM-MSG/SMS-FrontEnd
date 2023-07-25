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
    /**
     * show 함수를 사용하셈
     * @deprecated 이제 사용 안한다
     */
    onShow: (state, { payload }: PayloadAction<string>) => {
      state = {
        name: payload,
        value: true,
        element: null,
      }
      return state
    },
    /**
     * close 함수를 사용하셈
     * @deprecated 이제 사용 안한다
     */
    onClose: (state) => {
      state = {
        name: null,
        value: false,
        element: null,
      }
      return state
    },

    show: (state, { payload }: PayloadAction<ReactElement>) => {
      state.element = payload
    },
    close: (state) => {
      state.element = null
    },
  },
})

export const { onClose, onShow, close, show } = modalSlice.actions

export default modalSlice
