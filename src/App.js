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
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="As the workers at Medium, we want Actions to Matter too"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <meta name="robots" content="nofollow" />
        <link rel="manifest" href="/manifest.json" />
        <title>Medium Workers Union (MWU)</title>
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
