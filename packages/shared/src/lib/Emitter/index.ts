import { CallbacksType } from './type'

class Emitter {
  private callbacks: CallbacksType = {}

  public on(eventName: string, callback: <T>(params: T) => void) {
    this.callbacks[eventName] = callback
  }

  public emit<T>(eventName: string, params: T) {
    const callback = this.callbacks[eventName]
    if (!callback) return

    callback(params)
  }
}

export default Emitter
