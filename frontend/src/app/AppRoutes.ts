export enum AppRoutes{
  SPEAKER_ROUTE ="speakers",
  HOME_ROUTE ="home",
  FAVORITE_ROUTE="favorites",
  DETAIL_TALK_ROUTE="sessions/:talkId",
  DETAIL_SPEAKER_ROUTE="speakers/:speakerId"
}

export function toRoute(root : AppRoutes) : string {
  if(root.includes(":talkId")){
    return `/${root.replace(":talkId","")}`
  }
  if(root.includes(":speakerId")){
    return `/${root.replace(":speakerId","")}`
  }
  return `/${root}`
}
