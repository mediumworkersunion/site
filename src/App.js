import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
// Views
import Home from "./views/Home";

// TODO: define the pageLayouts and ensure it's being passed in during the page setup

const App = ({ pageLayout }) => {
  const childRef = useRef();
  useEffect(() => {
    document.body.classList.add("is-loaded");
  }, []);

  return (
    <>
     <Head>
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
    <ChakraProvider>
      <LayoutDefault>
        <Home />
      </LayoutDefault>
    </ChakraProvider>
    </>
  );
};

export default App;
