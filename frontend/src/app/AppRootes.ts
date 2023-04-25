export enum AppRootes{
  SPEAKER_ROUTE ="speakers",
  HOME_ROUTE ="home",
  FAVORITE_ROUTE="favorites"
}


export function toRoot(root : AppRootes) : string {
  return `/${root}`
}
