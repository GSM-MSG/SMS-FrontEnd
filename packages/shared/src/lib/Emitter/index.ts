import { CallbacksType } from './type'

class Emitter {
  private callbacks: CallbacksType = {}

  public on(
    eventName: string,
    callback: <T extends object>(params: T) => void
  ) {
    this.callbacks[eventName] = callback
  }

  public emit<T extends object>(eventName: string, params: T) {
    const callback = this.callbacks[eventName]
    if (!callback) return

    callback(params)
  }
}

export default Emitter
