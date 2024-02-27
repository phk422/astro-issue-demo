/// <reference types="vite/client" />
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  export default component;
}


interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_TIMEOUT: number
  readonly VITE_SOURCE_TYPE: number
  readonly VITE_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
