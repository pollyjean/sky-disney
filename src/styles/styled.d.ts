import "styled-components";
// 내가 타입스크립트 d.ts 정의를 덮어 씌워서 export 한다
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}
