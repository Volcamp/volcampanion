export enum AppRootes{
  SPEAKER_ROUTE ="speakers",
  HOME_ROUTE ="home",
  FAVORITE_ROUTE="favorites",
  DETAIL_TALK_ROUTE="sessions/:talkId",
  DETAIL_SPEAKER_ROUTE="speakers/:speakerId"
}


export function toRoot(root : AppRootes) : string {
  if(root.includes(":talkId")){
    return `/${root.replace(":talkId","")}`
  }
  if(root.includes(":speakerId")){
    return `/${root.replace(":speakerId","")}`
  }
  return `/${root}`
}
