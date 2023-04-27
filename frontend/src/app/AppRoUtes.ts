export enum AppRoUtes{
  SPEAKER_ROUTE ="speakers",
  HOME_ROUTE ="home",
  FAVORITE_ROUTE="favorites"
}


export function toRoute(root : AppRoUtes) : string {
  return `/${root}`
}
