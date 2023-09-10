// import original module declarations
import "styled-components";
import { PaletteDark, Spacing, Theme, Variables } from "./styles";

//extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    palette: PaletteDark;
    spacing: Spacing;
    variables: Variables;
  }
}
