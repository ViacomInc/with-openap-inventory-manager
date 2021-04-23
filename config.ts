import getConfig from "next/config";

interface PublicRuntimeConfig {
  publicRuntimeConfig: {
    NO_AUTH: boolean;
  };
}

export function getPublicRuntimeConfig(): PublicRuntimeConfig {
  return getConfig() as PublicRuntimeConfig;
}

export type AppConfig = {
  noAuth: boolean;
};

export interface AppConfigProps {
  config: AppConfig;
}

export function getAppRuntimeConfig(): AppConfig {
  const { publicRuntimeConfig } = getPublicRuntimeConfig();
  return {
    noAuth: publicRuntimeConfig.NO_AUTH,
  };
}
