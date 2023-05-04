export abstract class EventArgs {
  getType(): string {
    return this.constructor.name
  }

}
