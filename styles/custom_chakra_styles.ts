import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      blue: "#404ADC",
      orange: "#FF4D00",
    },
    bg: {
      dark: "#171A1F",
      light: "#FFFFFF",
    },
    text: {
      white: "#DCE0EA",
      dark: "#363949",
      grey: "#677483",
    },
  },
});

export default theme;
