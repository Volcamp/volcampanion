export enum AppRoutes {
  SPEAKER_ROUTE = "speakers",
  HOME_ROUTE = "sessions",
  INFOS_ROUTE = "infos",
  ADMIN_CONFERENCES = "admin/conferences",
  ADMIN_PLANNINGS = "admin/sessions",
  ADMIN_TALKS = "admin/talks",
  ADMIN_SPEAKERS = "admin/speakers",
  FAVORITE_ROUTE = "favorites",
  DETAIL_TALK_ROUTE = "sessions/:talkId",
  DETAIL_SPEAKER_ROUTE = "speakers/:speakerId",
  NOT_FOUND = "error",
  ROUTE_PAGE = "",
}

export function toRoute(root: AppRoutes): string {
  if (root.includes(":talkId")) {
    return `/${root.replace(":talkId", "")}`
  }
  if (root.includes(":speakerId")) {
    return `/${root.replace(":speakerId", "")}`
  }
  return `/${root}`
}

export function toRouteById(root: AppRoutes, id: string): string {
  if (root.includes(":talkId")) {
    return `/${root.replace(":talkId", "")}${id}`
  }
  if (root.includes(":speakerId")) {
    return `/${root.replace(":speakerId", "")}${id}`
  }
  return `/${root}/${id}`
}

