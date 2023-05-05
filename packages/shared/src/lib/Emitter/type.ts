export interface CallbacksType {
  [name: string]: <T extends object>(param: T) => void
}
