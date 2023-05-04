import {EventArgs} from "./EventArgs";

export class EventEmitter {
  listeners: any = {}

  private addListener(eventName: string, fn: any) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName: string, fn: any) {
    return this.addListener(eventName, fn);
  }

  once(eventName: string, fn: any) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    }
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  off(eventName: string, fn: any) {
    return this.removeListener(eventName, fn);
  }

  private removeListener(eventName: string, fn: any) {
    let lis = this.listeners[eventName];
    if (!lis) return this;
    for (let i = lis.length; i > 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }

  emit(eventArgs: EventArgs) {
    const eventName = eventArgs.getType();
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f: any) => {

      f(eventArgs);
    });
    return true;
  }

  private listenerCount(eventName: string) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }

  private rawListeners(eventName: string) {
    return this.listeners[eventName];
  }

}
