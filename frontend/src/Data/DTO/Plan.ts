//FIXME Can be renamed as Planning such as the API
export interface Plan {
  schedule: Date;

  getType(): PlanningType
}


//FIXME if you define an enumeration containing all Planning object type, you can avoid using your converter/identifier and
//FIXME make your code easier to read and to maintain
//FIXME note: full list here : https://volcamp-api-dev.azurewebsites.net/swagger-ui/#/Referential%20API/get_talk_formats

export enum PlanningType {
  BREAK = "BREAK",
  KEYNOTE = "KEYNOTE",
  CONFERENCE = "CONFERENCE",
  WORKSHOP = "WORKSHOP",
  REX = "REX",
  LIGHTNING = "LIGHTNING",
  DELIMITER_DAY = "DELIMITER_DAY"
}
