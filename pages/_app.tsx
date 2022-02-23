import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { resetServerContext } from "react-beautiful-dnd";

function MyApp({ Component, pageProps }: AppProps) {
  resetServerContext();
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
