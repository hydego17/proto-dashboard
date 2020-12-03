import { ThemeProvider } from "emotion-theming";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";

import GlobalStyles from "components/GlobalStyles";

import "../styles/globals.css";

const theme = {
  colors: {
    primary: "#222f3e",
    orange: "#ffa502",
    light_gray: "#ced6e0",
    dark_gray: "#a4b0be",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
