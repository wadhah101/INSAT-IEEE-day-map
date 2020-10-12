/* eslint-disable @typescript-eslint/no-empty-interface */
import { defaultTheme } from "./styles/theme";
import "styled-components";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_BASE_API_URL: string;
    }
  }
}

type MyTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
