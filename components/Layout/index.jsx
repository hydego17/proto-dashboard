import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box as="main" minH="100vh">
        <Sidebar />
        {children}
      </Box>
      <Footer />
    </>
  );
}
