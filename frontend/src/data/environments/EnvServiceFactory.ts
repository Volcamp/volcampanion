import {EnvironmentService} from "./environment.service";

export const EnvServiceFactory = () => {
  const env = new EnvironmentService();

  const browserWindow = window || {};
  // @ts-ignore
  const browserWindowEnv = browserWindow['__env'] || {};

  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      // @ts-ignore
      env[key] = window['__env'][key];
    }
  }
  return env;
};

export const EnvServiceProvider = {
  provide: EnvironmentService,
  useFactory: EnvServiceFactory,
  deps: [],
};
