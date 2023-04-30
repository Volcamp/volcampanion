import {ApiLinks} from "./ApiLinks";

export class LinkComposerService {
  public static constructEndPointConf(baseUrl: string, endPoint: string, idCurrentConference: string) {
    return `${LinkComposerService.constructEndPoint(baseUrl, endPoint)}${ApiLinks.ID_CONF}${idCurrentConference}`
  }

  public static constructEndPointId(baseUrl: string, endPoint: string, id: string) {
    console.log(`${LinkComposerService.constructEndPoint(baseUrl, endPoint)}${id}`)
    return `${LinkComposerService.constructEndPoint(baseUrl, endPoint)}${id}`
  }

  public static constructEndPoint(baseUrl: string, endPoint: string) {
    return `${baseUrl}${endPoint}`
  }
}



