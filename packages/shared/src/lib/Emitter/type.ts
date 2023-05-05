export interface CallbacksType {
  [name: string]: <T>(param: T) => void
}
