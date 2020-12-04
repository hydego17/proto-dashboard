import { ChakraProvider } from "@chakra-ui/react";
import ContextWrapper from "providers/ContextWrapper";

import Layout from "components/Layout";
import GlobalStyles from "components/GlobalStyles";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <GlobalStyles />
        <ContextWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextWrapper>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
