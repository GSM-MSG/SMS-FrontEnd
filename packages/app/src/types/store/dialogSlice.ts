import { Emitter } from 'shared'

export interface DialogInitialState {
  title: string
  content: string
  cancelText: string
  confirmText: string
  isShow: boolean
  emitter: Emitter
}

export type SetLogInfoType = Omit<DialogInitialState, 'isShow'>
