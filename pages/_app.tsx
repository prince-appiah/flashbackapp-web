import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/custom_chakra_styles";
import PageMeta from "../components/PageMeta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PageMeta />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
