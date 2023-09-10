import { colors } from ".";

const paletteDark = {
  appBackground: colors.black,
  foreground: colors.white,
  foregroundSecondary: colors.lightGray,
  foregroundSecondaryContrast: colors.charcoalGray,
  panelBackground: colors.charcoalGray,
  panelSecondaryBackground: colors.lightGray,
  failureColor: colors.crimsonRed,
};

export default paletteDark;

export type PaletteDark = typeof paletteDark;
