import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Emitter } from '@sms/shared'
import { DialogInitialState, SetLogInfoType } from '@/types/store/dialogSlice'

const initialState: DialogInitialState = {
  title: '',
  content: '',
  cancelText: '',
  confirmText: '',
  isShow: false,
  emitter: new Emitter(),
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setIsShow: (state) => {
      state.isShow = !state.isShow
    },
    setLogInfo: (state, { payload }: PayloadAction<SetLogInfoType>) => {
      state = {
        ...state,
        ...payload,
      }
      return state
    },
  },
})

export const { setLogInfo, setIsShow } = dialogSlice.actions

export default dialogSlice
