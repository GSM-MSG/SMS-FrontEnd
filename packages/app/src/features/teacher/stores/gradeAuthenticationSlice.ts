import { createSlice } from '@reduxjs/toolkit'

const gradeAuthenticationSlice = createSlice({
  name: 'gradeAuthentication',
  initialState: {
    focus: 0,
    maxFocus: 0,
  },
  reducers: {
    nextFocus: (state) => {
      if (state.focus < state.maxFocus) state.focus += 1
    },
    prevFocus: (state) => {
      if (state.focus > 0) state.focus -= 1
    },
    setMaxFocus: (state, { payload }: { payload: number }) => {
      state.maxFocus = payload
    },
  },
})

export const { nextFocus, prevFocus, setMaxFocus } =
  gradeAuthenticationSlice.actions

export default gradeAuthenticationSlice
