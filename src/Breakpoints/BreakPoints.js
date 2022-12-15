// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "20em",
  base: "60em",
  md: "48em",
  lg: "64em",
  xl: "70em",
  "2xl": "80em",
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints });
console.log('theme:', theme)
