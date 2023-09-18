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

export const FILTERS_PLANNING_THEME = [
  {
    name: PlanningTheme.LANGUAGE_AND_FRAMEWORK,
    description: "Lang. & Frameworks"
  },
  {
    name: PlanningTheme.BIGDATA_AND_AI,
    description: "Big Data & AI"
  },
  {
    name: PlanningTheme.WEB_AND_MOBILE,
    description: "Web & Mobile"
  },
  {
    name: PlanningTheme.DEVOPS_AND_CLOUD,
    description: "Devops & Cloud"
  },
  {
    name: PlanningTheme.ARCHI_PERF_AND_SECU,
    description: "Archi, Perf & Sécu"
  },
  {
    name: PlanningTheme.DISCOVERY,
    description: "Découverte"
  },
  {
    name: PlanningTheme.UX_UI,
    description: "UX/UI"
  },
  {
    name: PlanningTheme.PLENARY,
    description: "Plénière"
  }
]
