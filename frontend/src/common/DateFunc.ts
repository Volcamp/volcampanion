export function compareEqualDate(a: Date, b: Date): boolean {
  return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}


export function compareEqualDateAndTime(a: Date, b: Date): boolean {
  return compareEqualDate(a, b) && a.getTime() === b.getTime();
}


export function formatDate(date: Date): string {
  return `${date.toLocaleString('fr-FR', {weekday: 'long'})} ${date.getDate()} ${date.toLocaleString('fr-FR', {month: 'long'})}  ${date.getFullYear()}`
}
