export { default as studentListSlice } from './studentListSlice'
export { default as studentParamSlice } from './studentParamSlice'

import * as studentListActions from './studentListSlice'
import * as studentParamActions from './studentParamSlice'

export const actions = {
  ...studentListActions,
  ...studentParamActions,
}
