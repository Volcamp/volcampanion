export function concatenate(words: string[]): string {
  // @ts-ignore
  if (!String.prototype.replaceLast) {
    // @ts-ignore
    String.prototype.replaceLast = function (find, replace) {
      var index = this.lastIndexOf(find);

      if (index >= 0) {
        return this.substring(0, index) + replace + this.substring(index + find.length);
      }

      return this.toString();
    };
  }

  // @ts-ignore
  return words.join(', ').replaceLast(',', ' et ')
}
