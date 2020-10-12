/* eslint-disable @typescript-eslint/no-empty-interface */
import { defaultTheme } from "./styles/theme";
import "styled-components";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_CS_LINK: string;
      NEXT_PUBLIC_RAS_LINK: string;
      NEXT_PUBLIC_IAS_LINK: string;
      NEXT_PUBLIC_WIE_LINK: string;
      NEXT_PUBLIC_PES_LINK: string;
      NEXT_PUBLIC_EMBS_LINK: string;
    }
  }
}

type MyTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
