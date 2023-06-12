type Callback = (value: boolean) => void

class Observable {
  private _observers: Callback[] = []

  setOvserver(observer: Callback) {
    this._observers.push(observer)
  }

  notifyAll(isSuccessed: boolean) {
    this._observers.forEach((observer) => observer(isSuccessed))
    this._observers = []
  }

  get observers() {
    return this._observers
  }
}

const observable = new Observable()

export default observable
