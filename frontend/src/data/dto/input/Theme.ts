export interface Theme {
  id: number;
  name: PlanningTheme;
  description: string;
}

export enum PlanningTheme {
  LANGUAGE_AND_FRAMEWORK = "LANGUAGE_AND_FRAMEWORK",
  BIGDATA_AND_AI = "BIGDATA_AND_AI",
  WEB_AND_MOBILE = "WEB_AND_MOBILE",
  DEVOPS_AND_CLOUD = "DEVOPS_AND_CLOUD",
  ARCHI_PERF_AND_SECU = "ARCHI_PERF_AND_SECU",
  DISCOVERY = "DISCOVERY",
  UX_UI = "UX_UI",
  PLENARY = "PLENARY",
}
