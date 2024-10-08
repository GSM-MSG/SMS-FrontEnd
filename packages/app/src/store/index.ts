import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { dialogSlice } from '@features/dialog/stores'
import { modalSlice } from '@features/modal/stores'
import { studentListSlice, studentParamSlice } from '@features/student/stores'
import { toastSlice } from '@features/toast/stores'
import gradeAuthenticationSlice from '@features/teacher/stores/gradeAuthenticationSlice'

const reducers = combineReducers({
  dialog: dialogSlice.reducer,
  studentParam: studentParamSlice.reducer,
  modal: modalSlice.reducer,
  toast: toastSlice.reducer,
  studentList: studentListSlice.reducer,
  gradeAuthentication: gradeAuthenticationSlice.reducer,
})

export type RootState = ReturnType<typeof reducers>

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    default:
      return reducers(state, action)
  }
}

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

export const store = makeStore()
