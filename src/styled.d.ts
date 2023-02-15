import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    titColor: string;
    accentColor: string;
    tabBg: string;
    boxColor: string;
  }
}
