import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import NavHeader from '../components/NavHeader';
import NavFooter from '../components/NavFooter';
import { Router } from "next/router";
import { useState } from 'react';
import PageLoader from '../components/PageLoader';

function MyApp({ Component, pageProps }) {
 const [loading, setLoading] = useState(false);

 Router.events.on("routeChangeStart", () => setLoading(true));
 Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <ChakraProvider theme={theme}>
      {!loading ? (
        <>
          <NavHeader />
          <Component {...pageProps} />
          <NavFooter />
        </>
      ) : (
        <PageLoader />
      )}
    </ChakraProvider>
  ); 
}

export default MyApp
