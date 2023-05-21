import {EventArgs} from "./EventArgs";
import Event from "./Event";

// @ts-ignore
export class EventEmitter<T extends Event> {
  listeners: any = {}

  eventType: any;
  constructor(eventType: any) {
    this.eventType = eventType;
  }

  private addListener(eventName: string, fn: any) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(fn: any) {
    //@ts-ignore
    return this.addListener(this.eventType.name, fn);
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

  emit(eventArgs: EventArgs | undefined) {
    //@ts-ignore
    const eventName = this.eventType.name;
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f: any) => {
      f(eventArgs);
    });
    return true;
  }

}
