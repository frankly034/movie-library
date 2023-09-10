import { colors } from "../palette";
import { variables } from "../variables";
import { spacing } from "../spacing";

const theme = {
  colors,
  spacing,
  variables,
};

export type Theme = typeof theme;

export default theme;
