import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import dialogSlice from './dialogSlice'

const reducers = combineReducers({
  dialog: dialogSlice.reducer,
})

export type RootState = ReturnType<typeof reducers>

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    default:
      return reducers(state, action)
  }
}

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

export const store = makeStore()

const wrapper = createWrapper(makeStore, { debug: false })
export default wrapper
